import React, { Component, PropTypes } from 'react';

class Patient extends Component {
  render() {
    return (
      <div>
        <label>Name: </label>
        <span>{this.props.info.name}</span>
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
