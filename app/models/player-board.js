import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  gameWon: DS.belongsTo('game', { async: true, inverse: 'winner' }),
  game: DS.belongsTo('game', { async: true }),
  cells: DS.hasMany('cells', { async: true }),
  hasEnoughShips: function() {
    return this.get('cells').filterBy('hasShip', true).length > 9
  }.property('cells.@each.hasShip')
});
