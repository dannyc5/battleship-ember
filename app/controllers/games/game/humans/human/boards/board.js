import Ember from 'ember';

export default Ember.Controller.extend({
  rowNums: [1, 2, 3, 4, 5],
  colNums: [1, 2, 3, 4, 5],

  actions: {
    addShip(row, column, boardCell) {
      if (this.model.get('hasEnoughShips')) {
        alert('Already have 10 ships.')
        boardCell.toggleProperty('hasShip')
      } else {
        let newShip = this.store.createRecord('ship', {
                        row: row,
                        column: column,
                        board_id: this.model.id,
                        board: this.model })

        this.model.get('ships').addObject(newShip)

        newShip.save().then(ship => {
          if (ship.get('board.hasEnoughShips')) {
            debugger
            this.transitionToRoute('games.game.humans.human.boards', ship.get('board.player.game'), ship.get('board.player'))
          }
        }).catch((response) => {
          console.log(response)
          response.errors.forEach((msg) => console.log(msg))
        })

      }
    }
  }
});
