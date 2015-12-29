import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  players: DS.hasMany('players', {async: true, polymorphic: true})
});
