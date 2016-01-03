import DS from 'ember-data'

export default DS.Model.extend({
  player: DS.belongsTo('player', { async: true, polymorphic: true }),
  human: DS.belongsTo('human', { async: true }),
  bot: DS.belongsTo('bot', { async: true }),
  ships: DS.hasMany('ships', { async: true }),
  hasEnoughShips: function() {
    return this.get('ships.length') > 9
  }.property('ships.length'),
  shipAt(row, column) {
    return this.get('ships').any((ship) => (ship.get('row') === row && ship.get('column') === column))
  }
})
