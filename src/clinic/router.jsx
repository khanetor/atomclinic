import React from 'react';
import Router, { Route, Redirect, DefaultRoute } from 'react-router';

import ClinicApp from './components/index';
import Welcome from './components/welcome';
import NewPatient from './components/newPatient';
import EditPatient from './components/editPatient';
import PatientDetail from './components/patientDetail';
import PatientInfo from './components/patientInfo';
import PatientVisits from './components/patientVisits';
import PatientVisitDetail from './components/patientVisitDetail';
import PatientNewVisit from './components/newVisit';
import PatientEditVisit from './components/editVisit';

let routes = (
  <Route path='/' handler={ClinicApp}>
    <Route name='welcome' handler={Welcome} />
    <Route name='newPatient' handler={NewPatient} />
    <Route name='editPatient' path='editPatient/:id' handler={EditPatient} />
    <Route name='patientDetail' path='patient/:id' handler={PatientDetail}>
      <DefaultRoute handler={PatientInfo} />
      <Route name='patientVisits' handler={PatientVisits} />
      <Route name='patientVisitDetail' path='visitDetail/:visitId' handler={PatientVisitDetail} />
      <Route name='patientNewVisit' handler={PatientNewVisit} />
      <Route name='patientEditVisit' path='visitEdit/:visitId' handler={PatientEditVisit} />
    </Route>
    <Redirect to='welcome' />
  </Route>
);

export default Router.create({
  routes: routes
});
