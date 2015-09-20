import React, { Component } from 'react';
import { Link, RouteHandler } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _ from 'underscore';

import {months} from '../../addons/date';

import Store from '../stores/patientStore';
import Actions from '../actions/patientActions';

class PatientDetail extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let id = this.props.params.id;
    let patient = _.first(_.filter(this.props.patients, patient => patient._id === id));
    if (patient) {
      return (
        <div>
          <div className='row'>
            <div className='six columns'>
              <label>Name: {patient.name}</label>
              <label>DOB: {months[patient.dob.month]}/{patient.dob.day}/{patient.dob.year}</label>
              <label>Address: {patient.address}</label>
            </div>
            <div className='six columns'>
              <button onClick={Actions.deletePatient.bind(null, patient._id)} className='button danger'>Del</button>
              <Link className='button' to='editPatient' params={{id: patient._id}}>Edit</Link>
              <Link className='button info' to='patientVisits' params={{id: patient._id}}>Visit</Link>
            </div>
          </div>
          <RouteHandler />
        </div>
      );
    } else {
      return (<div><label>Patient not found</label></div>);
    }
  }
}

export default connectToStores(PatientDetail);
