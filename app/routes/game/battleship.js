import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    let promises = [
      model.get('humanBoard'),
      model.get('botBoard'),
      this.store.query('cell', {player_board_id: model.get('humanBoard.id')}),
      this.store.query('cell', {player_board_id: model.get('botBoard.id')})
      // this.store.query('ship', {player_board_id: model.get('humanBoard.id')}),
      // this.store.query('ship', {player_board_id: model.get('botBoard.id')}),
      // model.get('humanBoard.cells'),
      // model.get('botBoard.cells')
    ]
    return Ember.RSVP.all(promises);
  },

  setupController(controller, model) {
    controller.set('model', model)
    controller.set('humanBoard', model.get('humanBoard'))
    controller.set('botBoard', model.get('botBoard'))
    controller.set('humanBoardCells', model.get('humanBoard.cells'))
    controller.set('botBoardCells', model.get('botBoard.cells'))
  }
});
