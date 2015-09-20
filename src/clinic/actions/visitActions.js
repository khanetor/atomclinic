import alt from '../alt';
import _ from 'underscore';
import db from '../db';

class VisitActions {
  constructor() {
    this.generateActions(
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
}

export default alt.createActions(VisitActions);
