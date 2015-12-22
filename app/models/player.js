import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  game_id: DS.attr(),
  type: DS.attr(),
  name: DS.attr(),
  game: DS.belongsTo('player', {async: true}),
  board: DS.belongsTo('board', {async: true}),
  moves: DS.hasMany('moves'),
  gameWon: DS.belongsTo('game', {inverse: 'winner'})
});
