import Ember from 'ember';

export default Ember.Controller.extend({
  hasHit: function(){
    return this.model.get('hasHit')
  }.property('model.hasHit'),

  hasMiss: function(){
    return this.model.get('hasMiss')
  }.property('model.hasMiss'),

  clickAction: function(){
    if (this.model.get('botBoard.game.hasWinner')) {
      return 'gameOver';
    } else {
      return this.model.get('hasMove') ? 'alertOccupied' : 'makeMove'
    }
  }.property('model.hasMove'),

  actions: {
    makeMove() {
      let newMove = this.store.createRecord('move', { cell: this.model })
      this.model.set('move', newMove)

      let game = this.model.get('botBoard.game')
      newMove.save()
        .then(move => {
          this.store.query('move', {player_board_id: game.get('humanBoard.id')})
          this.store.queryRecord('game', {id: game.get('id')}).then(game => {
            if (game.get('hasWinner')) {
              this.transitionToRoute('game.battleship.sunk', game)
            }
          })
        }).catch((response) => {
          console.log(response)
          response.errors.forEach((msg) => console.log(msg))
        })
    },

    alertOccupied() {
      alert('Already guessed this spot.')
    },

    gameOver() {
      alert('Game has already ended.')
    }
  }
});
