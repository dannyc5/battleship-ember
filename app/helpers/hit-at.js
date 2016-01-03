import Ember from 'ember';

export function hitAt(params/*, hash*/) {
  let playerMoves = params[0]
    , row = params[1]
    , col = params[2]

  return playerMoves.any((move) => (move.get('row') === row && move.get('column') === col && move.get('hit')));
}

export default Ember.Helper.helper(hitAt);
