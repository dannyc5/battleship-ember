import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  gameId: DS.attr(),
  type: DS.attr(),
  name: DS.attr(),
  board: DS.belongsTo('board'),
  moves: DS.hasMany('moves'),
  gameWon: DS.belongsTo('game', {inverse: 'winner'})
});
