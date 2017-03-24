import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('post', params);
      newQuestion.save();
    }
  }
});
