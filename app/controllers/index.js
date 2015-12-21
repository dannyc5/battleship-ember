import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGame() {
      this.model.save().then(() => this.transitionToRoute('game', this.model));
    }
  }
});
