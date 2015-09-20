import alt from '../alt';
import _ from 'underscore';
import db from '../db';

class VisitActions {
  constructor() {
    this.generateActions(
      'loadVisitsCompleted',
      'createNewVisitCompleted'
    );
  }

  createNewVisit(newVisit, successCallBack) {
    newVisit = _.extend(newVisit, {type: 'visit'});
    db.insert(newVisit, (err, insertedVisit) => {
      if (err) {
        alert('Error - Cannot create new visit.');
      } else {
        this.actions.createNewVisitCompleted(newVisit);
        successCallBack(insertedVisit);
      }
    });
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
