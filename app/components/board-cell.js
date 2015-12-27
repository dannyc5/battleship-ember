import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: 'board-cell',

  classNameBindings: ['hasShip'],

  click() {
    if (this.get('hasShip')) {
      alert('Already have a ship on the selected spot')
    } else {
      this.sendAction('addShip', this.row, this.column, this)
    }
    this.toggleProperty('hasShip')
  }
});
