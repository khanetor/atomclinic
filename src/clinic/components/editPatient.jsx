import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import _ from 'underscore';
import PatientForm from './_patientForm';
import Actions from '../actions';
import Store from '../store';

class EditPatient extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let id = this.props.params.id;
    let patient = _.first(this.props.patients.filter(patient => patient._id === id));
    return (
      <PatientForm formTitle='Edit Patient' formAction={Actions.updatePatient} patient={patient}/>
    );
  }
}

export default connectToStores(EditPatient);
