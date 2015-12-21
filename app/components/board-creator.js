import Ember from 'ember';

export default Ember.Component.extend({
  ships() {
    return this.model.get('ships').any(ship, i, ships)
  },

  actions: {
    onAddShip() {
      if (this.model.hasEnoughShips()) {
        alert('Already have 10 ships.')
      } else if ( this.ships().any((ship, i, ships) => (ship.row === this.row && ship.column === this.column))) {
        alert('Already have a ship on the selected spot')
      } else {
        let newShip = this.store.createRecord('ship', {
          row: this.row,
          column: this.column,
          boardId: this.board.id
        })

        this.model.get('ships').addObject(newShip)
      }
    }
  }
});
