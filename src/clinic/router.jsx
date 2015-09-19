import React from 'react';
import Router, { Route } from 'react-router';

import ClinicApp from './components/index';
import NewPatient from './components/newPatient';
import PatientDetail from './components/patientDetail';

let routes = (
  <Route path='/' handler={ClinicApp}>
    <Route name='newPatient' handler={NewPatient} />
    <Route name='patientDetail' handler={PatientDetail} />
  </Route>
);

export default Router.create({
  routes: routes
});
