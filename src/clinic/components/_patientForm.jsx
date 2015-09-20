import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import {months, days, years} from '../../addons/date';
import router from '../router';

class PatientForm extends Component {

  formPatientAction(e) {
    e.preventDefault();
    let name = React.findDOMNode(this.refs.name).value;
    let phone = React.findDOMNode(this.refs.phone).value;
    let email = React.findDOMNode(this.refs.email).value;
    let month = parseInt(React.findDOMNode(this.refs.month).value);
    let day = parseInt(React.findDOMNode(this.refs.day).value);
    let year = parseInt(React.findDOMNode(this.refs.year).value);
    let address = React.findDOMNode(this.refs.address).value;

    // validate name
    if (!name) {
      alert('Name is missing.');
      return;
    }

    // validate address
    if (!address) {
      alert('Address is missing.');
      return;
    }

    // validate date of birth
    let dob = new Date(year, month, day);
    if (dob.getFullYear() !== year || dob.getMonth() !== month || dob.getDate() !== day) {
      alert('Invalid date of birth');
      return;
    }

    let newPatient = {name, phone, email, dob: {month, day, year}, address};

    if (this.props.patient) {
      newPatient = _.extend(this.props.patient, newPatient);
    }

    this.props.formAction(newPatient, (insertedPatient) => {
      router.transitionTo('patientDetail', {id: insertedPatient._id});
    });
  }

  render() {
    let monthOptions = months.map((month, i) => <option key={i} value={i}>{month}</option>);
    let dayOptions = days.map(day => <option key={day} value={day}>{day}</option>);
    let yearOptions = years.map(year =><option key={year} value={year}>{year}</option>);

    let name, phone, email, address, day, month, year = null;
    if (this.props.patient) {
      let patient = this.props.patient;
      name = patient.name;
      phone = patient.phone;
      email = patient.email;
      address = patient.address;
      day = patient.dob.day;
      month = patient.dob.month;
      year = patient.dob.year;
    }

    return (
      <div>
        <h5>{this.props.formTitle}</h5>
        <form onSubmit={this.formPatientAction.bind(this)}>
          <input className='u-full-width' type='text' placeholder='name' ref='name' defaultValue={name} />
          <input className='u-full-width' type='text' placeholder='phone' ref='phone' defaultValue={phone} />
          <input className='u-full-width' type='email' placeholder='email' ref='email' defaultValue={email} />
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
          <textarea className='u-full-width' placeholder='address' ref='address' defaultValue={address} />
          <input className='button-primary u-pull-right' type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

PatientForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formAction: PropTypes.func.isRequired,
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      day: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired
    })
  })
};

export default PatientForm;
