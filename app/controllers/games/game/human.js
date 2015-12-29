import Ember from 'ember';

export default Ember.Controller.extend({
  hello: function(){
    return 'hi ' + this.model.get('name')
  }.property('name')
});
