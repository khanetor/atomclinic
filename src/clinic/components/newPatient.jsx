'use strict';

import React, { Component } from 'react';
import _ from 'underscore';

import Actions from '../actions';
import {months, days, years} from '../../addons/date';

class NewPatient extends Component {

  createNewPatient(e) {
    e.preventDefault();
    let name = React.findDOMNode(this.refs.name).value;
    let month = parseInt(React.findDOMNode(this.refs.month).value);
    let day = parseInt(React.findDOMNode(this.refs.day).value);
    let year = parseInt(React.findDOMNode(this.refs.year).value);
    let address = React.findDOMNode(this.refs.address).value;

    // validate name
    if (!name) {
      alert('Name is missing.');
      return;
    }

    // validate address
    if (!address) {
      alert('Address is missing.');
      return;
    }

    // validate date of birth
    let dob = new Date(year, month, day);
    if (dob.getFullYear() !== year || dob.getMonth() !== month || dob.getDate() !== day) {
      alert('Invalid date of birth');
      return;
    }

    let newPatient = {name, dob: {month, day, year}, address};

    Actions.createNewPatient(newPatient);
  }

  render() {
    let monthOptions = months.map((month, i) => <option key={i} value={i}>{month}</option>);
    let dayOptions = days.map(day => <option key={day} value={day}>{day}</option>);
    let yearOptions = years.map(year =><option key={year} value={year}>{year}</option>);

    return (
      <form onSubmit={this.createNewPatient.bind(this)}>
        <h1>New Patient</h1>
        <input type='text' placeholder='name' ref='name' />
        <div>
          <select ref='month'>
            {monthOptions}
          </select>
          <select ref='day'>
            {dayOptions}
          </select>
          <select defaultValue='2015' ref='year'>
            {yearOptions}
          </select>
        </div>
        <textarea placeholder='address' ref='address' />
        <input type='submit' value='Save' />
      </form>
    );
  }
}

export default NewPatient;
