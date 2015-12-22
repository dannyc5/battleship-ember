import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: 'board-cell',

  click() {
    this.sendAction('addShip', this.row, this.column)
  }
});
