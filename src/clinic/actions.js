import alt from './alt';
import NEDB from 'nedb';
import _ from 'underscore';

const db = new NEDB({
  filename: '../clinicdb',
  autoload: true
});

class ClinicActions {
  constructor() {
    this.generateActions(
      'createNewPatientCompleted',
      'loadPatientsCompleted',
      'deletePatientCompleted'
    );
  }

  createNewPatient(newPatient) {
    newPatient = _.extend(newPatient, {type: 'patient'});
    db.insert(newPatient, (err, insertedPatient) => {
      if (err) {
        alert('Error - Cannot create new patient.');
      } else {
        this.actions.createNewPatientCompleted(insertedPatient);
      }
    });
  }

  loadPatients() {
    db.find({type: 'patient'}, (err, patients) => {
      if (err) {
        alert('Error - Cannot load patients.');
      } else {
        this.actions.loadPatientsCompleted(patients);
      }
    })
  }

  deletePatient(id) {
    db.remove({type: 'patient', _id: id}, {}, (err, count) => {
      if (err) {
        alert('Error - Cannot delete this patient.');
      } else {
        this.actions.deletePatientCompleted(id);
      }
    })
  }
}

export default alt.createActions(ClinicActions);
