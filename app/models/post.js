import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  timestamp: DS.attr(),
  response: DS.hasMany('response', { async: true })
});
