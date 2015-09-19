import alt from './alt';
import PouchDB from 'pouchdb';

class ClinicActions {
  constructor() {
    this.generateActions(
      'createNewPatientCompleted'
    );
  }

  createNewPatient(newPatient) {
    this.actions.createNewPatientCompleted(newPatient);
    // setTimeout(() => {
    //   this.actions.createNewPatientCompleted(newPatient);
    // }, 0);
  }
}

export default alt.createActions(ClinicActions);
