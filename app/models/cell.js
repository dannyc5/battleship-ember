import DS from 'ember-data';

export default DS.Model.extend({
  row: DS.attr(),
  column: DS.attr(),
  playerBoard: DS.belongsTo('playerBoard', { async: true, polymorphic: true }),
  humanBoard: DS.belongsTo('humanBoard', { async: true }),
  botBoard: DS.belongsTo('botBoard', { async: true }),
  ship: DS.belongsTo('ship', { async: true }),
  move: DS.belongsTo('move', { async: true }),
  hasShip: function(){
    return this.get('ship.id') !== undefined && this.get('ship.id') !== null;
  }.property('ship.id')
})
