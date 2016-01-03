import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  game: DS.belongsTo('game', { async: true }),
  board: DS.belongsTo('board', { async: true }),
  moves: DS.hasMany('moves')
});
