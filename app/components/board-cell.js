import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: 'board-cell',

  classNameBindings: ['hasShip', 'hasMiss', 'hasHit'],

  click() {
    if (this.get('hasShip')) {
      alert('Already have a ship on the selected spot')
    } else {
      this.sendAction('action', this.row, this.column, this)
      this.toggleProperty('hasShip');
    }
  }
});
