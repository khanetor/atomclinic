import React, { Component } from 'react';
import VisitForm from './_visitForm';
import Actions from '../actions/visitActions';

class NewVisit extends Component {
  render() {
    return (
      <VisitForm formTitle='New Visit' patientId={this.props.params.id} formAction={Actions.createNewVisit} />
    );
  }
}

export default NewVisit;
