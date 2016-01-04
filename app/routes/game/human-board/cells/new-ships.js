import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    // model === game.humanBoard
    let promises = [
      this.store.query('cell', {player_board_id: model.get('id')}),
    ]
    return Ember.RSVP.all(promises);

  },

  setupController(controller, model) {
    if (model.get('hasEnoughShips')) {
      this.transitionTo('game.battleship', this.modelFor('game'))
    }
    controller.set('model', model.get('cells'))
  }
});
