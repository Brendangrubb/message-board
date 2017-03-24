import Ember from 'ember';

export default Ember.Component.extend({
  addResponse: false,
  actions: {
    responseFormShow() {
      this.set('addResponse', true);
    },
    saveResponse() {
     var params = {
       responder: this.get('responder'),
       answer: this.get('answer'),
       respCategory: this.get('respCategory'),
       respTimestamp: this.get('respTimestamp')
     };
     this.set('addResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
