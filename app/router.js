import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource('questions');
  this.route('new-question');
  this.resource('question', {path: 'question/:question.id'});
});

export default Router;
