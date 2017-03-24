import Ember from 'ember';

export default Ember.Component.extend({
  addPost: false,
  actions: {
    postFormShow() {
      this.set('addPost', true);
    },
    savePost() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        body: this.get('body'),
        category: this.get('category'),
        timestamp: this.get('timestamp')
      };
      console.log(params);
      this.set('addPost', false);
      this.sendAction('savePost', params);
    }
  }
});
