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
      'loadPatientsCompleted'
    );
  }

  createNewPatient(newPatient) {
    newPatient = _.extend(newPatient, {type: 'patient'});
    db.insert(newPatient, (err, insertedPatient) => {
      if (err) {
        alert('Error creating new patient');
      } else {
        this.actions.createNewPatientCompleted(insertedPatient);
      }
    });
  }

  loadPatients() {
    db.find({type: 'patient'}, (err, patients) => {
      if (err) {
        alert('Load patients failed');
      } else {
        this.actions.loadPatientsCompleted(patients);
      }
    })
  }

  deletePatient(id) {
    alert(id);
  }
}

export default alt.createActions(ClinicActions);
