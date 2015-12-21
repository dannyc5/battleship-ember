import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPlayer() {
      if (this.model.get('name')) {
        this.model
          .save()
          .then((player) => {
            this.transitionToRoute('board', player)
          })
      } else {
        alert('You must enter a name.')
      }
    }
  }
});
