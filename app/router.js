import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', function() {
    this.route('game', {path: '/:game_id'}, function() {
      this.route('new_human')
      this.route('human', {path: 'player/:human_id'})
      this.route('board', {path: 'board/:board_id'}, function(){
        this.route('setup')
      });
    });
  });
});

export default Router;
