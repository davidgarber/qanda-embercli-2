import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  response: DS.attr('string'),
  date: DS.attr('date'),
  question: DS.belongsTo('question', {async: true})
});
