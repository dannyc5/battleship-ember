import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var human = this.store.createRecord('human', {game_id: parseInt(params.game_id)})
    let game = this.store.find('game', params.game_id).then((game) => {
      human.set('game', game)
    })

    return human
  }
});
