import React, { Component } from 'react';
import PatientForm from './_patientForm';
import Actions from '../actions/patientActions';

class NewPatient extends Component {

  render() {
    return (
      <PatientForm formTitle='New Patient' formAction={Actions.createNewPatient}/>
    );
  }
}

export default NewPatient;
