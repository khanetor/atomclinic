import alt from '../alt';
import _ from 'underscore';
import db from '../db';

class VisitActions {
  constructor() {
    this.generateActions(
      'loadVisitsCompleted',
      'createNewVisitCompleted',
      'deleteVisitCompleted'
    );
  }

  createNewVisit(newVisit, successCallback) {
    newVisit = _.extend(newVisit, {type: 'visit'});
    db.insert(newVisit, (err, insertedVisit) => {
      if (err) {
        alert('Error - Cannot create new visit.');
      } else {
        this.actions.createNewVisitCompleted(newVisit);
        if (successCallback) successCallback(insertedVisit);
      }
    });
  }

  deleteVisit(id, successCallback) {
    let confirm = window.confirm('Are you sure?');
    if (confirm) {
      db.remove({type: 'visit', _id: id}, {}, (err, count) => {
        if (err) {
          alert('Error - Cannot delete this visit.');
        } else {
          this.actions.deleteVisitCompleted(id);
          if (successCallback) successCallback();
        }
      });
    }
  }

  loadVisits() {
    db.find({type: 'visit'}, (err, visits) => {
      if (err) {
        alert('Error - Cannot load visits.');
      } else {
        this.actions.loadVisitsCompleted(visits);
      }
    })
  }
}

export default alt.createActions(VisitActions);
