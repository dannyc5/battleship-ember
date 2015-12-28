import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addShip(row, column, boardCell) {
      if (this.model.hasEnoughShips()) {
        alert('Already have 10 ships.')
        boardCell.toggleProperty('hasShip')
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
              debugger
            })
            .catch((response) => {
              console.log(response.message)
              response.errors.forEach((msg) => console.log(msg))
            })
        }
      }
    }
  }
});
