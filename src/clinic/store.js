import alt from './alt';
import Actions from './actions';

class ClinicStore {
  constructor() {
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
    }
  }
}

export default alt.createStore(ClinicStore, 'ClinicStore');
