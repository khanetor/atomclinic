import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Patient extends Component {
  render() {
    let name = this.props.info.name;
    return (
      <div>
        <Link className='button menu-item u-full-width' to='patientDetail' params={{id: this.props.info._id}}>
          <label>{name}</label>
        </Link>
      </div>
    )
  }
}

Patient.propTypes = {
  info: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Patient;
