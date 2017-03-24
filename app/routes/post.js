import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      posts: this.store.findRecord('post', params.post_id),
      responses: this.store.findAll('response')
    });
  },

  actions: {
    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
