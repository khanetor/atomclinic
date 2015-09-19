'use strict';

import _ from 'underscore';

let months = [
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

let days = _.range(1, 32);

let years = _.range(1900, new Date().getFullYear() + 1);

export {months, days, years};
