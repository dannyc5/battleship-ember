import DS from 'ember-data';

export default DS.Model.extend({
  row: DS.attr(),
  column: DS.attr(),
  board: DS.belongsTo('board', { async: true })
});
