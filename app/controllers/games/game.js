import Ember from 'ember';

export default Ember.Controller.extend({
  hasHuman: function(){
    return this.model.get('human.length') > 0
  }.property('human')
});
