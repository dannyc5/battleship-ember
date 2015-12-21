import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let game = this.store.createRecord('game')
    let human = game.set('human', this.store.createRecord('human'))
    let board = human.set('board', this.store.createRecord('board'))
    return game
  }
});
