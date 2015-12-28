import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', function() {
    this.route('game', {path: '/:game_id'}, function() {
      this.route('humans', function() {
        this.route('new')
        this.route('human', {path: '/:human_id'}, function() {
          this.route('boards', function() {
            this.route('board', {path: '/:board_id'})
          });
        });
      });
    });
  });
});

export default Router;
