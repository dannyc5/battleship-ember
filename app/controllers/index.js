import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGame() {
      this.model
        .save()
        .then((game) => {
          let human = this.store.createRecord('human', {game_id: game.get('id')})
          this.transitionToRoute('human', human)
        })
    }
  }
});
