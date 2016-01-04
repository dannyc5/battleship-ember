import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  cellsByRow: groupBy('model', 'row'),

  actions: {
    addShip() {
      debugger
      // if (this.model.get('hasEnoughShips')) {
      //   alert('Already have 10 ships.')
      //   boardCell.toggleProperty('hasShip')
      // } else {
      //   let newShip = this.store.createRecord('ship', {
      //                   row: row,
      //                   column: column,
      //                   board_id: this.model.id,
      //                   board: this.model })

      //   this.model.get('ships').addObject(newShip)
      //   newShip.save().then(ship => {
      //     boardCell.toggleProperty('hasShip');
      //     if (ship.get('board.hasEnoughShips')) {
      //       this.transitionToRoute('game.battleship', ship.get('board.player.game'))
      //     }
      //   }).catch((response) => {
      //     console.log(response)
      //     response.errors.forEach((msg) => console.log(msg))
      //   })
      // }
    }
  }
});
