import alt from '../alt';
import Actions from '../actions/visitActions';

class VisitStore {
  constructor() {
    this.bindListeners({
      createNewVisitCompleted: Actions.createNewVisitCompleted,
      loadVisitsCompleted: Actions.loadVisitsCompleted
    });

    this.state = {
      visits: []
    };
  }

  loadVisitsCompleted(visits) {
    this.setState({visits});
  }

  createNewVisitCompleted(newVisit) {
    let visits = this.state.visits.concat(newVisit);
    this.setState({visits});
  }
}

export default alt.createStore(VisitStore, 'VisitStore');
