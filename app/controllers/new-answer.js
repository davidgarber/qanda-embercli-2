import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['question'],
  actions: {
    saveAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        user: this.get('user'),
        response: this.get('response')
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
        question.get('answers').pushObject(newAnswer);
        question.save();

    this.transitionToRoute("question");
    }
  }
});
