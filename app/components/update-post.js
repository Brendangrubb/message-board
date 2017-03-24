import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    showUpdateForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      console.log("updatePost");
      console.log(post);
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        body: this.get('body'),
        category: this.get('category'),
        timestamp: this.get('timestamp')
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
