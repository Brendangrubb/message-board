import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      if (confirm('Totes sure you want to delete??')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
