import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import Store from '../store';
import Actions from '../actions';
import Patient from './patient';

class PatientList extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  componentDidMount() {
    Actions.loadPatients();
  }

  render() {
    let patients = this.props.patients.map(patient => <li key={patient._id}><Patient info={patient} /></li>)
    return (
      <div id='patientList'>
        <ul className='scrollable'>
          {patients}
        </ul>
      </div>
    );
  }
}

export default connectToStores(PatientList);
