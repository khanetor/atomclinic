import alt from './alt';
import Actions from './actions';

class ClinicStore {
  constructor() {
    this.bindListeners({
      createNewPatientCompleted: Actions.createNewPatientCompleted
    });

    this.state = {
      patients: [
        {
          id: 1,
          name: 'Joe'
        },
        {
          id: 2,
          name: 'Merry'
        }
      ]
    };
  }

  createNewPatientCompleted(newPatient) {
    let patients = this.state.patients.push(newPatient);
    this.setState({patients: patients});
    alert(213);
  }
}

export default alt.createStore(ClinicStore, 'ClinicStore');
