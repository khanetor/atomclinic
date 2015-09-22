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

db.ensureIndex({fieldName: 'name'}, (err) => {
  if (err) {
    console.error('Error - Cannot index name field.');
  } else {
    console.log('Indexing patient name successful');
  }
});

db.ensureIndex({fieldName: 'type'}, (err) => {
  if (err) {
    console.error('Error - Cannot index type field.');
  } else {
    console.log('Indexing patient type successful');
  }
});

module.exports = db;
