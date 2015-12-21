import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('board', {playerId: params.player_id})
  }
});
