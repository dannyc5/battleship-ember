import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    debugger
    controller.set('winner', model.get('winner'))
  }
});
