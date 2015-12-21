import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game')
  this.route('human', {path: '/humans/new/:game_id'})
});

export default Router;
