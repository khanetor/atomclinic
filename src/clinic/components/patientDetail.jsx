import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import VisitActions from '../actions/visitActions';

class PatientDetail extends Component {
  componentDidMount() {
    VisitActions.loadVisits();
  }

  render() {
    return (
      <RouteHandler />
    );
  }
}

export default PatientDetail;
