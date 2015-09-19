'use strict';

import React, { Component } from 'react';
import _ from 'underscore';

import Actions from '../actions';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = _.range(1, 32);

const years = _.range(1900, new Date().getFullYear() + 1);

class NewPatient extends Component {

  createNewPatient(e) {
    e.preventDefault();
    let name = React.findDOMNode(this.refs.name).value;
    let month = React.findDOMNode(this.refs.month).value;
    let day = React.findDOMNode(this.refs.day).value;
    let year = React.findDOMNode(this.refs.year).value;
    let address = React.findDOMNode(this.refs.address).value;

    let newPatient = {name, dob: {month, day, year}, address};

    Actions.createNewPatient(newPatient);
  }

  render() {
    let monthOptions = months.map((month, i) => <option key={i} value={i+1}>{month}</option>);
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
