import DS from 'ember-data';
import Player from 'player';

export default Player.extend({
  game: DS.belongsTo('game', {inverse: 'bot'})
});
