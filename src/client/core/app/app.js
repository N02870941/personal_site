
// NOTE - This is the only global variable
// in regular JavaScript scope (other than app). This allows
// content from the config file to be accessed
// from anywhere within the application, independent
// of AngularJS rules, dependencies, etc
var config = (function getConfig() {
  return JSON.parse(
    $.ajax({
      url: "config/client/app.config.json",
      dataType: 'json',
      async: false,
    }).responseText
  );
})();

//------------------------------------------------------------------------------

(function() {

  try {
    /**
     * Returns the names of the modules
     * to be initialized
     */
    var moduleNames = (function() {
      var array = [];

      // Create an array of just the module
      // names by iterating through the modules
      // and only pushing the names onto the new array
      for (var i in config.modules) {
        array.push(config.modules[i].name);
      }

      return array;
    })();

//------------------------------------------------------------------------------

    /**
     * Initializes the states of a provided modules
     *
     * @param module Module specification
     */
    function createModuleStates(module) {

      angular.module(module.name)
      .config(function(jdStatesProvider, $stateProvider) {

        jdStatesProvider.initStates($stateProvider, module.states);
      });
    }

//------------------------------------------------------------------------------

    // Create the modules for the app
    for (var i in config.modules) {

      // Instantiate module for the first time, and inject dependencies
      angular.module(config.modules[i].name, config.modules[i].dependencies);

      // If a given module has other states to
      // initialize, initialize them
      if (config.modules[i].states.length) {
        createModuleStates(config.modules[i]);
      }
    }

//------------------------------------------------------------------------------

    // Create the main module for the app
    angular.module(config.app.name, moduleNames.concat(config.app.dependencies))
    .config(function ($stateProvider, jdStatesProvider, modulesProvider, $urlRouterProvider) {

      // Set up the states of the main modules the application
      modulesProvider.initMainModulesStates($stateProvider, config.modules);
      jdStatesProvider.initStates($stateProvider, config.app.states);

      // If the URL path is not found, reroute to
      // the /notFound page
      $urlRouterProvider.otherwise('/notFound');
    });

//------------------------------------------------------------------------------

  } catch (err) {
    console.error(err);
  }

})();
