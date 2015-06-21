import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        user: this.get('user'),
        response: this.get('response'),
        timestamp: new Date()
      });

      var question = this.get('controllers.question.model');
        answer.save().then(function() {
        question.get('answers').pushObject(answer);
        question.save();
        });

      this.setProperties({
        user:'',
        response:''
      });

    this.transitionToRoute("question");
    }
  }
});
