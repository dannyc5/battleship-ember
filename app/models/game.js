import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  winner: DS.belongsTo('player', {inverse: 'gameWon'}),
  players: DS.hasMany('players', {inverse: 'game', async: true, polymorphic: true}),
  human: DS.belongsTo('human', {async: true}),
  bot: DS.belongsTo('bot', {async: true})
});
