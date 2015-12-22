import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPlayer() {
      if (this.model.get('name')) {
        this.model
          .save()
          .then((player) => {
            let board = this.store.createRecord('board', {player_id: player.id})
            this.transitionToRoute('board', )
          })
      } else {
        alert('You must enter a name.')
      }
    }
  }
});
