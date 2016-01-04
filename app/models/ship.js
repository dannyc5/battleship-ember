import DS from 'ember-data';

export default DS.Model.extend({
  cell: DS.belongsTo('cell', { async: true })
});
