import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    let promises = [
      model.get('ships')
    ]
    return Ember.RSVP.all(promises);
  }
});
