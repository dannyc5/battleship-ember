import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var board = this.store.createRecord('board', {player_id: parseInt(params.player_id)})
    let human = this.store.find('human', params.player_id).then((human) => {
      board.set('player', human)
    })

    return board
  }
});
