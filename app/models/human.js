import DS from 'ember-data';
import Player from './player';

export default Player.extend({
  type: DS.attr('string', {defaultValue: 'Human'})
});
