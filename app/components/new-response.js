import Ember from 'ember';

var date = moment().format('M' + '/' + 'D' + '/' + 'YY');

export default Ember.Component.extend({
  addResponse: false,
  actions: {
    responseFormShow(post) {
      this.set('addResponse', true);
    },
    saveResponse() {

      var params = {
        responder: this.get('responder'),
        answer: this.get('answer'),
        respTimestamp: date,
        post: this.get('post'),
      };
      this.sendAction('saveResponse', params);
      this.set('addResponse', false);
   }
  }
});
