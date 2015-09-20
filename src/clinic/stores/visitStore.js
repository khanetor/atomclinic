import alt from '../alt';
import Actions from '../actions/visitActions';

class VisitStore {
  constructor() {
    this.bindListeners({
      createNewVisitCompleted: Actions.createNewVisitCompleted,
      deleteVisitCompleted: Actions.deleteVisitCompleted,
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

  deleteVisitCompleted(id) {
    let visits = this.state.visits.filter(visit => visit._id !== id);
    this.setState({visits});
  }
}

export default alt.createStore(VisitStore, 'VisitStore');
