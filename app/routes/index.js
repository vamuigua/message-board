import Ember from 'ember';

// var questions = [{
//   id:1,
//   content:"lalalala",
//   author:"ksksksk",
//   notes:"hddhdh"
// }];

export default Ember.Route.extend({
  model() {
    // return questions;
    return this.store.findAll('data');
  },
});
