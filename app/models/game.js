import DS from 'ember-data';

export default DS.Model.extend({
  winner_id: DS.attr(),
  winner: DS.belongsTo('playerBoard', {async: true, polymorphic: true, inverse: 'gameWon'}),
  humanBoard: DS.belongsTo('humanBoard', {async: true}),
  botBoard: DS.belongsTo('botBoard', {async: true}),
  hasWinner: function(){
    return this.get('winner_id') !== undefined && this.get('winner_id') !== null;
  }.property('winner_id'),
  battleshipOn: function() {
    // NOT TESTED. Use for battleship route
    return (this.get('winner_id') === null || this.get('winner_id') === undefined) && this.get('humanBoard.hasEnoughShips');
  }.property('winner_id', 'humanBoard.hasEnoughShips')
});
