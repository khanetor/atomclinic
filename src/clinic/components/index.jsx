import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';

import PatientList from './patientList';

class ClinicApp extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='row'>
          Private Clinic
          <Link className='button u-pull-right' to='newPatient'>+ New Patient</Link>
        </h1>
        <div className='row'>
          <div className='three columns'>
            <PatientList />
          </div>
          <div className='nine columns'>
            <RouteHandler className='nine columns' />
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicApp;
