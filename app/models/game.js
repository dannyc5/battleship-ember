import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  // players: DS.hasMany('players', {async: true, polymorphic: true})
  human: DS.belongsTo('human', {async: true}),
  bot: DS.belongsTo('bot', {async: true})
});
