import React, { Component } from 'react';
import { Link } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import numeral from 'numeral';
import _ from 'underscore';
import Store from '../stores/visitStore';
import Actions from '../actions/visitActions';
import router from '../router';

class VisitDetail extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let visitId = this.props.params.visitId;
    let patientId = this.props.params.id;
    let visit = _.first(this.props.visits.filter(visit => visit._id === visitId && visit._patient_id === patientId));

    if (!visit) {
      return <div>Visit not found</div>;
    } else {
      return (
        <div>
          <div className='row'>
            <label className='u-full-width'>
              Date: {visit.date.month + 1}/{visit.date.day}/{visit.date.year}
            </label>
            <label className='u-full-width'>
              Sympton: {visit.symptom}
            </label>
            <label className='u-full-width'>
              Diagnosis: {visit.diagnosis}
            </label>
            <label className='u-full-width'>
              Test: {visit.test}
            </label>
            <label className='u-full-width'>
              Treatment: {visit.treatment}
            </label>
            <label className='u-full-width'>
              Fee: {numeral(visit.fee).format('0,0')} vnd
            </label>
          </div>
          <div className='row'>
            <button className='danger' onClick={Actions.deleteVisit.bind(null, visitId, () => router.transitionTo('patientVisits', {id: patientId}))}>Delete</button>
            <Link className='button' to='patientEditVisit' params={{id: patientId, visitId: visitId}}>Edit</Link>
            <Link className='button' to='patientVisits' params={{id: patientId}}>Back</Link>
          </div>
        </div>
      );
    }
  }
}

export default connectToStores(VisitDetail);
