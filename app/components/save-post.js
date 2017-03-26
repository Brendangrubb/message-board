import Ember from 'ember';

var date = moment().format('M' + '/' + 'D' + '/' + 'YY');

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
        timestamp: date
      };
      this.set('addPost', false);
      this.sendAction('savePost', params);
    }

  }
});
