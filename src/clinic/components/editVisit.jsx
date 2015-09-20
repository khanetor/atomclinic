import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import _ from 'underscore';
import Store from '../stores/visitStore';
import VisitForm from './_visitForm';

class EditVisit extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  action() {
    alert('hello');
  }

  render() {
    let visitId = this.props.params.visitId;
    let patientId = this.props.params.id;
    let visit = _.first(this.props.visits.filter(visit => visit._id === visitId && visit._patient_id === patientId));

    return (
      <VisitForm formTitle='Edit Visit' formAction={this.action} patientId={this.props.params.id} visit={visit}/>
    );
  }
}

export default connectToStores(EditVisit);
