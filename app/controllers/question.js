import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
    },

    delete: function() {
      if(confirm("Do you want to delete this question?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
