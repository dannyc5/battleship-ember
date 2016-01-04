import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  humanBoard: DS.belongsTo('humanBoard', {async: true}),
  botBoard: DS.belongsTo('botBoard', {async: true}),
  battleshipOn: function() {
    // NOT TESTED
    return (this.get('winner_id') === null || this.get('winner_id') === undefined) && this.get('humanBoard.hasEnoughShips');
  }.property('winner_id', 'humanBoard.hasEnoughShips')
});
