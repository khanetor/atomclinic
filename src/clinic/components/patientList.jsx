import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import Store from '../stores/patientStore';
import Patient from './patient';

class PatientList extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let searchTerm = this.props.searchTerm.toLowerCase();
      // Get list of patients
    let patients = this.props.patients
      // Filter patients by searchTerm
      .filter(patient => patient.name.toLowerCase().indexOf(searchTerm) >= 0)
      .map(patient => <li key={patient._id}><Patient info={patient} /></li>);

    return (
      <div id='patientList'>
        <ul className='patient-list-scrollable no-bullet'>
          {patients}
        </ul>
      </div>
    );
  }
}

export default connectToStores(PatientList);
