
// NOTE - This is the only global variable
// in regular JavaScript scope (other than app). This allows
// content from the config file to be accessed
// from anywhere within the application, independent
// of AngularJS rules, modules, etc
const config = (function getConfig() {
  return JSON.parse(
    $.ajax({
      url: "client/core/config/config.json",
      dataType: 'json',
      async: false,
    }).responseText
  );
})();

//------------------------------------------------------------------------------

(function() {

  // Create the main module and the shared module for exposing providers
  angular.module("app", config.modules.concat(config.dependencies));
  angular.module('shared', []);

  // Dynamically create the modules
  // TODO - abstract the states, and provider dependencies to the config.json file
  for (var i in config.modules) {
    angular.module(config.modules[i], ['shared', 'ui.router'])
  }

})();
