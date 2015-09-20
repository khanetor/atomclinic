import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from '../stores/visitStore';
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
    let visits = this.props.visits.filter(visit => visit._patient_id === patientId).map(visit => <Visit key={visit._id} visit={visit} />)
    return (
      <div>
        <div className='row'>
          <div className='two columns'>
            Date
          </div>
          <div className='three columns'>
            Symptom
          </div>
          <div className='four columns'>
            Treatment
          </div>
          <div className='three columns fee'>
            Fee
          </div>
        </div>
        {visits}
      </div>
    );
  }
}

VisitList.propTypes = {
  patientId: PropTypes.string.isRequired
};

export default connectToStores(VisitList);
