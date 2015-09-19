import alt from '../alt';
import Actions from '../actions/patientActions';
import _ from 'underscore';

class ClinicStore {
  constructor() {
    this.bindListeners({
      createNewPatientCompleted: Actions.createNewPatientCompleted,
      updatePatientCompleted: Actions.updatePatientCompleted,
      loadPatientsCompleted: Actions.loadPatientsCompleted,
      deletePatientCompleted: Actions.deletePatientCompleted
    });

    this.state = {
      patients: []
    };
  }

  createNewPatientCompleted(newPatient) {
    let patients = this.state.patients.concat(newPatient);
    this.setState({patients});
  }

  updatePatientCompleted(updatedPatient) {
    let patients = this.state.patients;
    let i = _.findIndex(patients, patient => patient._id === updatedPatient._id);
    patients[i] = updatedPatient;
    this.setState({patients});
  }

  loadPatientsCompleted(patients) {
    this.setState({patients});
  }

  deletePatientCompleted(id) {
    let patients = this.state.patients.filter(patient => patient._id !== id);
    this.setState({patients});
  }
}

export default alt.createStore(ClinicStore, 'ClinicStore');
