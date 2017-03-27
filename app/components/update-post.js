import Ember from 'ember';
// import moment from 'moment';

// var date = moment().format('M' + '/' + 'D' + '/' + 'YY');

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    showUpdateForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        body: this.get('body'),
        category: this.get('category'),
        timestamp: "12/12/17"
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
