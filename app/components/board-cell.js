import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: 'board-cell',

  classNameBindings: ['ship:has-ship'],

  click() {
    if (this.get('ship')) {
      alert('Already have a ship on the selected spot')
    } else {
      this.sendAction('addShip', this.row, this.column, this)
      debugger;
      // this.toggleProperty('hasShip');
    }
  },

  didInsertElement() {
    this.set('ship', this.get('board.ships').find(function(ship){return ship.get('row') == this.row && ship.get('column') == this.column}.bind(this)))
  }
});
