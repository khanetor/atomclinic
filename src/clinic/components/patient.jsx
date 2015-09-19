import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Patient extends Component {
  render() {
    return (
      <div>
        <Link className='button' to='patientDetail' params={{id: this.props.info.id}}>
          <label>{this.props.info.name}</label>
        </Link>
      </div>
    )
  }
}

Patient.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default Patient;
