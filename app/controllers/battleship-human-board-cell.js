import Ember from 'ember';

export default Ember.Controller.extend({
  hasHit: function(){
    return this.model.get('hasHit')
  }.property('model.hasHit'),

  hasMiss: function(){
    return this.model.get('hasMiss')
  }.property('model.hasMiss'),

  hasShip: function(){
    return this.model.get('hasShip')
  }.property('model.hasShip')
});
