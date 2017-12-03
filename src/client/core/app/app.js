
// NOTE - This is the only global variable
// in regular JavaScript scope (other than app). This allows
// content from the config file to be accessed
// from anywhere within the application, independent
// of AngularJS rules, dependencies, etc
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

  try {
    /**
     * Returns the names of the dependencies
     */
    var moduleNames = (function() {
      var array = [];

      for (var i in config.modules) {
        array.push(config.modules[i].name);
      }

      return array;
    })();

  //------------------------------------------------------------------------------

    /**
     * Creates an angular module
     *
     * @param module Module specification
     */
    function createModule(module) {
      angular.module(module.name, module.dependencies)
      .config(function(jdStatesProvider, $stateProvider) {

        jdStatesProvider.initStates($stateProvider, module.states);
      });
    }

  //------------------------------------------------------------------------------

    // Create the main module and the shared module for exposing modules
    angular.module("app", moduleNames.concat(config.app.dependencies))
    .config(function ($stateProvider,
                         jdStatesProvider,
                         modulesProvider,
                         moduleNames,
                         $urlRouterProvider) {

      // Set up the states off the application
      modulesProvider.initModules($stateProvider, moduleNames);
      jdStatesProvider.initStates($stateProvider, config.app.states);
      $urlRouterProvider.otherwise('/notFound');
    });

  //------------------------------------------------------------------------------

    angular.module('app')
    .constant('moduleNames', moduleNames)
    .constant('objects', config.modules)
    .constant('site', config.site)
    .constant('methodsOfContact', config.methodsOfContact);

  //------------------------------------------------------------------------------

    // Create the modules
    for (var i in config.modules) {
      angular.module(config.modules[i].name, config.modules[i].dependencies)

      if (config.modules[i].states.length) {
        createModule(config.modules[i]);
      }
    }

  //------------------------------------------------------------------------------

    angular.module('shared', []);

  } catch (err) {
    console.error(err);
  }

})();
