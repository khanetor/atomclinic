import React, { Component } from 'react';
import Modal from '../../addons/modal';

class NewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  open() {
    this.setState({isOpened: true});
  }

  close() {
    this.setState({isOpened: false});
  }

  save() {
    let name = React.findDOMNode(this.refs.name).value;
    let dob = React.findDOMNode(this.refs.dob).value;
    console.log(typeof dob);
    this.close();
  }

  render() {
    return (
      <div>
        <button onClick={this.open.bind(this)}>New Patient</button>
        <Modal isOpened={this.state.isOpened} closeOnEsc onClose={this.close.bind(this)}>
          <div>
            <input type='text' placeholder='name' ref='name' /><br />
            <input type='date' placeholder='dob' ref='dob' /><br />
            <button onClick={this.save.bind(this)}>Save</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewPatient;
