import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPlayer() {
      if (this.model.get('name')) {
        this.model.save()
          .then((playerBoard) => {
            this.transitionToRoute('game.human_board.cells.new_ships', playerBoard.get('game'), playerBoard)
          })
      } else {
        alert('You must enter a name.')
      }
    }
  }
});
