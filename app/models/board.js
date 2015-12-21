import DS from 'ember-data';

export default DS.Model.extend({
  player_id: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  player: DS.belongsTo('player'),
  ships: DS.hasMany('ships')
});
