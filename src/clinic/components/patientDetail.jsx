import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import _ from 'underscore';

import {months} from '../../addons/date';

import Store from '../store';
import Actions from '../actions';

class PatientDetail extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let id = parseInt(this.props.params.id);
    let patient = _.first(_.filter(this.props.patients, patient => patient.id === id));

    return (
      <div>
        <label>Name: {patient.name}</label>
        <label>Address: {patient.address}</label>
        <label>DOB: {months[patient.dob.month]}/{patient.dob.day}/{patient.dob.year}</label>
      </div>
    )
  }
}

export default connectToStores(PatientDetail);
