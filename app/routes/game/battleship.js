import Ember from 'ember';

export default Ember.Route.extend({
  // afterModel(model, transition) {
  //   let promises = [
  //     this.store.query('ship', {board_id: model.get('human.board.id')}),
  //     this.store.query('move', {player_id: model.get('human.id')}),
  //     this.store.query('move', {player_id: model.get('bot.id')})
  //   ]
  //   return Ember.RSVP.all(promises);
  // },

  // setupController(controller, model) {
  //   controller.set('model', model)
  //   controller.set('human', model.get('human'))
  //   controller.set('humanBoard', model.get('human.board'))
  //   controller.set('bot', model.get('bot'))
  //   controller.set('botBoard', model.get('bot.board'))

  //   controller.set('humanBoardShips', model.get('human.board.ships'))
  //   controller.set('humanMoves', model.get('human.moves'))
  //   controller.set('botMoves', model.get('bot.moves'))
  // }
});
