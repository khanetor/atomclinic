import React from 'react';
import Router, { Route, Redirect } from 'react-router';

import ClinicApp from './components/index';
import Welcome from './components/welcome';
import NewPatient from './components/newPatient';
import EditPatient from './components/editPatient';
import PatientDetail from './components/patientDetail';
import PatientVisits from './components/patientVisits';
import PatientVisitDetail from './components/patientVisitDetail';
import PatientNewVisit from './components/newVisit';

let routes = (
  <Route path='/' handler={ClinicApp}>
    <Route name='welcome' handler={Welcome} />
    <Route name='newPatient' handler={NewPatient} />
    <Route name='editPatient' path='editPatient/:id' handler={EditPatient} />
    <Route name='patientDetail' path='patient/:id' handler={PatientDetail}>
      <Route name='patientVisits' handler={PatientVisits} />
      <Route name='patientVisitDetail' handler={PatientVisitDetail} />
      <Route name='patientNewVisit' handler={PatientNewVisit} />
    </Route>
    <Redirect to='welcome' />
  </Route>
);

export default Router.create({
  routes: routes
});
