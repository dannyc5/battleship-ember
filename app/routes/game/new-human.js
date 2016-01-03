import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let human = this.store.createRecord('human')
    human.set('game', this.modelFor('game'))
    return human
  }
});
