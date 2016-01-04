import Ember from 'ember';

export default Ember.Controller.extend({
  hasHit: function(){
    return this.model.get('hasHit')
  }.property('model.hasHit'),

  hasMiss: function(){
    return this.model.get('hasMiss')
  }.property('model.hasMiss'),

  clickAction: function(){
    return this.get('hasMove') ? 'alertOccupied' : 'makeMove'
  }.property('model.hasMove'),

  actions: {
    makeMove() {
      console.log('move')
      // let newShip = this.store.createRecord('ship', { cell: this.model })
      // this.model.set('ship', newShip)
      // newShip.save()
      //   .then(ship => {
      //     if (ship.get('cell.humanBoard.hasEnoughShips')) {
      //       this.transitionToRoute('game.battleship', ship.get('cell.humanBoard.game'))
      //     }
      //   }).catch((response) => {
      //     console.log(response)
      //     response.errors.forEach((msg) => console.log(msg))
      //   })
    },

    alertOccupied() {
      alert('Already have a ship on the selected spot')
    }
  }
});
