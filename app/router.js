import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game', {path: 'games/:game_id'}, function() {
    this.route('new_human_board')
    this.route('human_board', {path: 'human_board/:human_board_id'}, function(){
      this.route('cells', function(){
        this.route('new_ships')
      })
    });

    this.route('battleship')
  });
});

export default Router;
