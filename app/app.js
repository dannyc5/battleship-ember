import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

let inflector = Ember.Inflector.inflector;
// THIS LINE DOESN'T WORK, LIKELY BECAUSE OF A BUG
// inflector.irregular("human", "humans");

// Using this for now
inflector._pCache = { human: "humans" };

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
