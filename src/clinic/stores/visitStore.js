import alt from '../alt';
import Actions from '../actions/visitActions';

class VisitStore {
  constructor() {
    this.bindListeners({
      createNewVisitCompleted: Actions.createNewVisitCompleted
    });

    this.state = {
      visits: [
        {
          _id: '21313sadad',
          _patient_id: 'O0JzkrxpMym3Ca8C',
          type: 'visit',
          date: {
            year: 2015,
            month: 12,
            day: 6
          },
          symptom: 'asdad',
          test: '21323',
          treatment: '12dfdad',
          fee: 100000
        }
      ]
    };
  }

  createNewVisitCompleted(newVisit) {
    let visits = this.state.visits.concat(newVisit);
    this.setState({visits});
  }
}

export default alt.createStore(VisitStore, 'VisitStore');
