'use strict';

const NEDB = require('nedb');
const path = require('path');
// switch to pouchdb
// import PouchDB from 'pouchdb';
let dbpath = path.resolve(process.env.HOME || process.env.HOMEPATH, 'clinicdb');
let db = new NEDB({
  filename: dbpath,
  autoload: true
});

module.exports = db;
