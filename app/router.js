import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games')
  this.route('game', {path: 'games/:game_id'}, function() {
    this.route('new_human')
    this.route('board', {path: 'board/:board_id'}, function(){
      this.route('setup')
    });
  });
});

export default Router;
