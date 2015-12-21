import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGame() {
      this.model
        .save()
        .then((game) => {
          console.log('here')
          this.transitionToRoute('human', game)
        })
    }
  }
});
