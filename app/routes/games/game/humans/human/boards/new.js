import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('board', {player: this.modelFor('games.game.humans.human')})
  }
});
