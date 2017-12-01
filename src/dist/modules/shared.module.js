// We create this module and inject
// it into the main module 'app' to expose
// all of shared's providers to all over
// child modules of app
(function() {
  angular.module('shared', []);
})();
