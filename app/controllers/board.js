import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addShip(row, column) {
      if (this.model.hasEnoughShips()) {
        alert('Already have 10 ships.')
      } else if ( this.model.shipAt(row, column)) {
        alert('Already have a ship on the selected spot')
      } else {
        let newShip = this.store.createRecord('ship', {
                        row: row,
                        column: column,
                        board_id: this.model.id,
                        board: this.model })

        this.model.get('ships').addObject(newShip)

        if (this.model.hasEnoughShips()) {
          this.model.save()
            .then((board) => {
              debugger;
            })
        }
      }
    }
  }
});
