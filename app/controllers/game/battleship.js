import Ember from 'ember';

export default Ember.Controller.extend({
  rowNums: [1, 2, 3, 4, 5],
  colNums: [1, 2, 3, 4, 5],

  actions: {
    test(){
      debugger
    }
  }
});
