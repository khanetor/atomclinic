import alt from './alt';
import Actions from './actions';
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
      patients: [
        // {
        //   _id: '0',
        //   name: 'Joe',
        //   dob: {
        //     day: 1,
        //     month: 0,
        //     year: 1988
        //   },
        //   address: 'n/a'
        // },
        // {
        //   _id: '1',
        //   name: 'Merry',
        //   dob: {
        //     day: 1,
        //     month: 0,
        //     year: 1988
        //   },
        //   address: 'n/a'
        // }
      ]
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
