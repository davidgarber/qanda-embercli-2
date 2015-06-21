import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'}, function(){
    this.route('new-answer');
  });
  this.route('new-question');
});

export default Router;
