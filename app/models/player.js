import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  game_id: DS.attr(),
  type: DS.attr(),
  name: DS.attr(),
  game: DS.belongsTo('player'),
  board: DS.belongsTo('board'),
  moves: DS.hasMany('moves'),
  gameWon: DS.belongsTo('game', {inverse: 'winner'})
});
