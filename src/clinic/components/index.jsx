import React, { Component } from 'react';

import PatientList from './patientList';
import NewPatient from './newPatient';

class ClinicApp extends Component {
  render() {
    return (
      <div>
        <NewPatient />
        <PatientList />
      </div>
    );
  }
}

export default ClinicApp;
