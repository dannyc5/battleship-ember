import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('human', {gameId: params.game_id})
  }
});
