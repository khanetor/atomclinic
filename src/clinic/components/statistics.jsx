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
      visitsPerPatient = numeral(visitsPerPatient).format('0,000.00');
    }

    let totalEarning = this.props.visits.map(visit => visit.fee).reduce((x, y) => { return x+y }, 0);
    let earningPerVisit = totalEarning / visitCount;
    let earningPerPatient = totalEarning / patientCount;
    totalEarning = numeral(totalEarning).format('0,000.00');
    if (!earningPerVisit) {
      earningPerVisit = 0;
    } else {
      earningPerVisit = numeral(earningPerVisit).format('0,000.00');
    }
    if (!earningPerPatient) {
      earningPerPatient = 0;
    } else {
      earningPerPatient = numeral(earningPerPatient).format('0,000.00');
    }

    return (
      <div className='statistics'>
        <h5 className='u-full-width'>Statistics</h5>
        <label>Total patients: {patientCount}</label>
        <label>Total visits: {visitCount}</label>
        <label>Visits per patient: {visitsPerPatient}</label>
        <label>Total earning: {totalEarning} vnd</label>
        <label>Earning per visit: {earningPerVisit} vnd/visit</label>
        <label>Earning per patient: {earningPerPatient} vnd/patient</label>
      </div>
    );
  }
}

export default connectToStores(Statistics);
