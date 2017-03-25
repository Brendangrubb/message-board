import Ember from 'ember';

var date = moment().format('M' + '/' + 'D' + '/' + 'YY');

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
       respTimestamp: date,
       post: this.get('post'),
     };
     this.set('addResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
