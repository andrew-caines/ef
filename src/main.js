import environment from './environment';
require('node_modules/babel-polyfill/dist/polyfill.js');

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .globalResources('bootstrap/css/bootstrap.css')
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
