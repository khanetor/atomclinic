import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';

import PatientList from './patientList';

class ClinicApp extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Link to='welcome'><h3 className='u-pull-left'>Private Clinic</h3></Link>
          <div className='u-pull-right'>
            <Link className='button button-primary vertical-center' to='newPatient'>+ New Patient</Link>
          </div>
        </div>
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
