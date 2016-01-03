import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    let promises = [
      model.get('human'),
      model.get('bot'),
      model.get('human').get('board'),
      model.get('bot').get('board')
    ]

    return Ember.RSVP.all(promises);
  },

  setupController(controller, model) {
    controller.set('human', model.get('human'))
    controller.set('humanBoard', model.get('human.board'))
    controller.set('bot', model.get('bot'))
    controller.set('botBoard', model.get('bot.board'))
    this.store.find('ship', {board_id: model.get('human.board.id')}).then((ships) => {
      controller.set('humanBoardShips', ships)
    })
  }
});
