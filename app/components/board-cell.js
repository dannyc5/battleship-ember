import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: 'board-cell',

  classNameBindings: ['hasShip', 'hasMiss', 'hasHit'],

  click() {
    this.sendAction('action', this.row, this.column, this)
  }
});
