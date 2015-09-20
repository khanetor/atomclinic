import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PatientStore from '../stores/patientStore';
import VisitStore from '../stores/visitStore';
import numeral from 'numeral';

class Statistics extends Component {
  static getStores() {
    return [PatientStore, VisitStore];
  }

  static getPropsFromStores() {
    let PatientStoreState = PatientStore.getState();
    let VisitStoreState = VisitStore.getState();
    return {
      patients: PatientStoreState.patients,
      visits: VisitStoreState.visits
    };
  }

  render() {
    let patientCount = this.props.patients.length;
    let visitCount = this.props.visits.length;
    let visitsPerPatient = visitCount / patientCount;
    if (!visitsPerPatient || visitsPerPatient === Infinity) {
      visitsPerPatient = 0;
    } else {
      visitsPerPatient = numeral(visitsPerPatient).format('0.00');
    }

    return (
      <div className='statistics'>
        <h5 className='u-full-width'>Statistics</h5>
        <label>Total patients: {patientCount}</label>
        <label>Total visits: {visitCount}</label>
        <label>Total patient: {visitsPerPatient}</label>
      </div>
    );
  }
}

export default connectToStores(Statistics);
