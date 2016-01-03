import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  human: DS.belongsTo('human', {async: true}),
  bot: DS.belongsTo('bot', {async: true}),
  battleshipOn() {
    // NOT TESTED
    return (this.winner_id === null || this.winner_id === undefined) && this.get('human.board.hasEnoughShips')
  }.property('winner_id, human.board.ships.length')
});
