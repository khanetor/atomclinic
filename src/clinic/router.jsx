import React from 'react';
import Router, { Route, Redirect } from 'react-router';

import ClinicApp from './components/index';
import Welcome from './components/welcome';
import NewPatient from './components/newPatient';
import EditPatient from './components/editPatient';
import PatientDetail from './components/patientDetail';
import PatientVisits from './components/patientVisits';

let routes = (
  <Route path='/' handler={ClinicApp}>
    <Route name='welcome' handler={Welcome} />
    <Route name='newPatient' handler={NewPatient} />
    <Route name='editPatient' path='editPatient/:id' handler={EditPatient} />
    <Route name='patientDetail' path='patientDetail/:id' handler={PatientDetail} />
    <Route name='patientVisits' path='patientVisits/:id' handler={PatientVisits} />
    <Redirect to='welcome' />
  </Route>
);

export default Router.create({
  routes: routes
});
