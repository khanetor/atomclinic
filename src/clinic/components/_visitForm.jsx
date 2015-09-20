import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import {months, days, years} from '../../addons/date';
import router from '../router';

class VisitForm extends Component {

  formVisitAction(e) {
    e.preventDefault();
    let symptom = React.findDOMNode(this.refs.symptom).value;
    let diagnosis = React.findDOMNode(this.refs.diagnosis).value;
    let test = React.findDOMNode(this.refs.test).value;
    let treatment = React.findDOMNode(this.refs.treatment).value;
    let fee = parseInt(React.findDOMNode(this.refs.fee).value);
    let month = parseInt(React.findDOMNode(this.refs.month).value);
    let day = parseInt(React.findDOMNode(this.refs.day).value);
    let year = parseInt(React.findDOMNode(this.refs.year).value);

    // validate symptom
    if (!symptom) {
      alert('Symptom is missing.');
      return;
    }

    // validate diagnosis
    if (!diagnosis) {
      alert('Diagnosis is missing.');
      return;
    }

    // validate test
    if (!test) {
      alert('Test is missing.');
      return;
    }

    // validate treatment
    if (!treatment) {
      alert('Treatment is missing.');
      return;
    }

    // validate fee
    if (!fee) {
      alert('Fee is missing.');
      return;
    }

    // validate date of visit
    let date = new Date(year, month, day);
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
      alert('Invalid date of visit');
      return;
    }

    let _patient_id = this.props.patientId;
    let newVisit = {_patient_id, date: {month, day, year}, symptom, diagnosis, test, treatment, fee};

    if (this.props.visit) {
      newVisit = _.extend(this.props.visit, newVisit);
    }

    this.props.formAction(newVisit, (insertedVisit) => {
      router.transitionTo('patientVisitDetail', {id: insertedVisit._patient_id, visitId: insertedVisit._id});
    });
  }

  render() {
    let monthOptions = months.map((month, i) => <option key={i} value={i}>{month}</option>);
    let dayOptions = days.map(day => <option key={day} value={day}>{day}</option>);
    let yearOptions = years.map(year =><option key={year} value={year}>{year}</option>);

    let symptom, diagnosis, test, treatment, fee, day, month, year = null;
    if (this.props.visit) {
      let visit = this.props.visit;
      symptom = patient.symptom;
      diagnosis = patient.diagnosis;
      test = patient.test;
      treatment = patient.treatment;
      fee = patient.fee;
      day = patient.date.day;
      month = patient.date.month;
      year = patient.date.year;
    }

    return (
      <div>
        <h5>{this.props.formTitle}</h5>
        <form onSubmit={this.formVisitAction.bind(this)}>
          <div className='row'>
            <select defaultValue={month} ref='month' className='three columns'>
              {monthOptions}
            </select>
            <select defaultValue={day} ref='day' className='two columns'>
              {dayOptions}
            </select>
            <select defaultValue={year} ref='year' className='two columns'>
              {yearOptions}
            </select>
          </div>
          <textarea className='u-full-width' placeholder='symptom' ref='symptom' defaultValue={symptom} />
          <textarea className='u-full-width' placeholder='diagnosis' ref='diagnosis' defaultValue={diagnosis} />
          <textarea className='u-full-width' placeholder='test' ref='test' defaultValue={test} />
          <textarea className='u-full-width' placeholder='treatment' ref='treatment' defaultValue={treatment} />
          <input type='number' className='u-full-width' placeholder='fee' ref='fee' defaultValue={fee} />
          <input className='button-primary u-pull-right' type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

VisitForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formAction: PropTypes.func.isRequired,
  patientId: PropTypes.string.isRequired,
  visit: PropTypes.shape({

  })
};

export default VisitForm;
