import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGame() {
      this.model.save()
        .then((game) => {
          this.transitionToRoute('games.game.new_human', game)
        })
    }
  }
});
