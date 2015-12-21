import DS from 'ember-data';

export default DS.Model.extend({
  boardId: DS.attr(),
  row: DS.attr(),
  column: DS.attr(),
  updatedAt: DS.attr(),
  createdAt: DS.attr(),
  board: DS.belongsTo('board')
});
