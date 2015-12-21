import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('board', {player_id: params.player_id})
  }
});
