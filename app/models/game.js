import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  winner: DS.belongsTo('player', {inverse: 'gameWon'}),
  human: DS.belongsTo('human'),
  bot: DS.belongsTo('bot')
});
