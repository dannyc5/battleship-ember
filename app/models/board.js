import DS from 'ember-data';

export default DS.Model.extend({
  playerId: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
