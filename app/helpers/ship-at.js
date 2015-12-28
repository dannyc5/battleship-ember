import Ember from 'ember';

export function shipAt(params/*, hash*/) {
  let board = params[0]
    , row = params[1]
    , col = params[2]

  return board.shipAt(row, col);
}

export default Ember.Helper.helper(shipAt);
