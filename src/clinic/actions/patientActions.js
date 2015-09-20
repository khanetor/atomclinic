import alt from '../alt';
import _ from 'underscore';
import db from '../db';

class PatientActions {
  constructor() {
    this.generateActions(
      'createNewPatientCompleted',
      'updatePatientCompleted',
      'loadPatientsCompleted',
      'deletePatientCompleted'
    );
  }

  createNewPatient(newPatient, successCallback) {
    newPatient = _.extend(newPatient, {type: 'patient'});
    db.insert(newPatient, (err, insertedPatient) => {
      if (err) {
        alert('Error - Cannot create new patient.');
      } else {
        this.actions.createNewPatientCompleted(insertedPatient);
        successCallback(insertedPatient);
      }
    });
  }

  updatePatient(patient, successCallback) {
    db.update({_id: patient._id}, patient, {}, (err, count) => {
      if (err) {
        alert('Error - Cannot update this patient.');
      } else {
        this.actions.updatePatientCompleted(patient);
        successCallback(patient);
      }
    });
  }

  deletePatient(id) {
    let confirm = window.confirm('Are you sure?');
    if (confirm) {
      db.remove({type: 'patient', _id: id}, {}, (err, count) => {
        if (err) {
          alert('Error - Cannot delete this patient.');
        } else {
          this.actions.deletePatientCompleted(id);
        }
      });
    }
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
}

export default alt.createActions(PatientActions);
