import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('human', {game_id: parseInt(params.game_id)})
  }
});
