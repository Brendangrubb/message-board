import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
     var params = {
       answer: this.get('answer'),
       responder: this.get('responder'),
       respCategory: this.get('respCategory'),
       respTimestamp: this.get('respTimestamp')
     };
     this.set('addNewResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
