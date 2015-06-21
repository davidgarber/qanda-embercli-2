import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['question'],
  actions: {
    saveAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        user: this.get('user'),
        response: this.get('response')
      });
      var question = this.get('controllers.questions.question.model');
      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);
        question.save();
      });
      this.setProperties({
        name:'',
        description:'',
        body:''
      });

    }
  }
});
