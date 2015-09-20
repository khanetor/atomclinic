import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Patient extends Component {
  render() {
    let name = this.props.info.name;
    if (name.length > 18) {
      let length = name.length;
      name = `${name.substring(0, 6)}...${name.substring(length - 6, length)}`;
    }

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
