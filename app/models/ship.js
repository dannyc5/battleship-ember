import DS from 'ember-data';

export default DS.Model.extend({
  board_id: DS.attr(),
  row: DS.attr(),
  column: DS.attr(),
  updatedAt: DS.attr(),
  createdAt: DS.attr(),
  board: DS.belongsTo('board')
});
