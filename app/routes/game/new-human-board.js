import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let humanBoard = this.store.createRecord('humanBoard')
    humanBoard.set('game', this.modelFor('game'))
    return humanBoard
  }
});
