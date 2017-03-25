import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  responder: DS.attr(),
  respTimestamp: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
