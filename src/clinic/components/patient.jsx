import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Patient extends Component {
  render() {
    return (
      <div>
        <label>Name: </label>
        <span>{this.props.info.name}</span>
        <Link className='button' to='patientDetail'>Detail</Link>
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
