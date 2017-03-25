import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('post', params.post_id);
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
    },
    saveResponse(params) {
      console.log(params);
      var newResponse = this.store.createRecord('response', params);
      var post = params.post;
      post.get('responses').addObject(newResponse);
      newResponse.save().then(function() {
        return post.save();
      });
    }
  }
});
