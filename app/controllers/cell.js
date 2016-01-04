import Ember from 'ember';

export default Ember.Controller.extend({
  hasShip: function(){
    return this.model.get('hasShip')
  }.property('model.hasShip'),

  clickAction: function(){
    return this.get('hasShip') ? 'alertOccupied' : 'addShip'
  }.property('hasShip'),

  actions: {
    addShip() {
      let newShip = this.store.createRecord('ship', { cell: this.model })
      this.model.set('ship', newShip)
      newShip.save()
        .then(ship => {
          if (ship.get('cell.humanBoard.hasEnoughShips')) {
            this.transitionToRoute('game.battleship', ship.get('cell.humanBoard.game'))
          }
        }).catch((response) => {
          console.log(response)
          response.errors.forEach((msg) => console.log(msg))
        })
    },

    alertOccupied() {
      alert('Already have a ship on the selected spot')
    }
  }
});
