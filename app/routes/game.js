import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    let promises = [
      model.get('human'),
      model.get('bot'),
      model.get('human.board'),
      model.get('bot.board')
    ]
    return Ember.RSVP.all(promises);
  },

  setupController(controller, model) {
    controller.set('model', model)
    controller.set('human', model.get('human'))
    controller.set('humanBoard', model.get('human.board'))
    controller.set('bot', model.get('bot'))
    controller.set('botBoard', model.get('bot.board'))

    this.store.find('ship', {board_id: model.get('human.board.id')}).then((ships) => {
      controller.set('humanBoardShips', ships)
    })
    this.store.find('move', {player_id: model.get('human.id')}).then((moves) => {
      controller.set('humanMoves', moves)
    })
    this.store.find('move', {player_id: model.get('bot.id')}).then((moves) => {
      controller.set('botMoves', moves)
    })
  }
});
