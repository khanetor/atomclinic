import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';
import PatientActions from '../actions/patientActions';
import VisitActions from '../actions/visitActions';

import PatientList from './patientList';

class ClinicApp extends Component {
  componentDidMount() {
    PatientActions.loadPatients();
    VisitActions.loadVisits();
  }

  search() {
    let searchTerm = React.findDOMNode(this.refs.search).value;
    PatientActions.search(searchTerm);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Link to='welcome'><h3 className='u-pull-left'>Private Clinic</h3></Link>
          <div className='u-pull-right'>
            <input type='text' placeholder='search by name' ref='search' onChange={this.search.bind(this)} />
            <Link className='button button-primary vertical-center' to='newPatient'>+ New Patient</Link>
          </div>
        </div>
        <div className='row'>
          <div className='three columns'>
            <PatientList />
          </div>
          <div className='nine columns'>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicApp;
