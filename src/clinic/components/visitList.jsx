import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from '../stores/visitStore';
import Actions from '../actions/visitActions';
import Visit from './visit';

class VisitList extends Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  render() {
    let patientId = this.props.patientId;
    let visits = this.props.visits.filter(visit => visit._patient_id === patientId).map(visit => <Visit key={visit._id} />)
    return (
      <div>
        {visits}
      </div>
    );
  }
}

VisitList.propTypes = {
  patientId: PropTypes.string.isRequired
};

export default connectToStores(VisitList);
