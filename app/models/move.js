import DS from 'ember-data';

export default DS.Model.extend({
  hit: DS.attr(),
  cell: DS.belongsTo('cell', { async: true })
});
