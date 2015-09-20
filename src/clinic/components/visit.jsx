import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import numeral from 'numeral';

class Visit extends Component {
  render() {
    let visit = this.props.visit;
    let date = visit.date;

    return (
      <Link to='patientVisitDetail' params={{id: visit._patient_id, visitId: visit._id}}>
        <div className='row'>
          <div className='two columns'>
            {date.month + 1}/{date.day}/{date.year}
          </div>
          <div className='three columns'>
            {visit.symptom}
          </div>
          <div className='four columns'>
            {visit.treatment}
          </div>
          <div className='three columns fee'>
            {numeral(visit.fee).format('0,0')} vnd
          </div>
        </div>
      </Link>
    );
  }
}

Visit.propTypes = {
  visit: PropTypes.shape({
    date: PropTypes.shape({
      year: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired
    }),
    symptom: PropTypes.string.isRequired,
    diagnosis: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired,
    treatment: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired
  })
};

export default Visit;
