import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import Store from '../store';
import Patient from './patient';

class PatientList extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let patients = this.props.patients.map(patient => <li key={patient.id}><Patient info={patient} /></li>)
    return (
      <div id='patientList'>
        <ul>
          {patients}
        </ul>
      </div>
    );
  }
}

export default connectToStores(PatientList);
