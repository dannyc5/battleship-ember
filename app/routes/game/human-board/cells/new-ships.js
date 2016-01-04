import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    // model is humanBoard

    // TODO: run this after ships have loaded
    if (model.get('hasEnoughShips')) {
      this.transitionTo('game.battleship', this.modelFor('game'))
    }
  },

  setupController(controller, model) {
    controller.set('model', model.get('cells'))
  }
});
