import EmberRouter from '@ember/routing/router';
import config from 'login-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('home-page');
});
