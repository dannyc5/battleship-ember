import DS from 'ember-data'

export default DS.Model.extend({
  player_id: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  player: DS.belongsTo('player'),
  ships: DS.hasMany('ships', { async: true }),
  hasEnoughShips: function() {
    return this.get('ships.length') > 9
  }.property('ships.length'),
  shipAt(row, column) {
    return this.get('ships').any((ship) => (ship.get('row') === row && ship.get('column') === column))
  }
})
