import alt from './alt';
import Actions from './actions';
import _ from 'underscore';

class ClinicStore {
  constructor() {
    this.bindListeners({
      createNewPatientCompleted: Actions.createNewPatientCompleted
    });

    this.state = {
      patients: [
        {
          id: 0,
          name: 'Joe',
          dob: {
            day: 1,
            month: 0,
            year: 1988
          },
          address: 'n/a'
        },
        {
          id: 1,
          name: 'Merry',
          dob: {
            day: 1,
            month: 0,
            year: 1988
          },
          address: 'n/a'
        }
      ]
    };
  }

  createNewPatientCompleted(newPatient) {
    newPatient = _.extend(newPatient, {id: this.state.patients.length});
    console.log(newPatient);
    let patients = this.state.patients.concat(newPatient);
    this.setState({patients: patients});
  }
}

export default alt.createStore(ClinicStore, 'ClinicStore');
