import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  timestamp: DS.attr()
});
