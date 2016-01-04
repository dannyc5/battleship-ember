import DS from 'ember-data';
import Player from './player-board';

export default Player.extend({
  type: DS.attr('string', {defaultValue: 'BotBoard'})
});
