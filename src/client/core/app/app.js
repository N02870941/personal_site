
// NOTE - This is the only global variable
// in regular JavaScript scope (other than app). This allows
// content from the config file to be accessed
// from anywhere within the application, independent
// of AngularJS rules, dependencies, etc
const config = (function getConfig() {
  return JSON.parse(
    $.ajax({
      url: "client/config/config.json",
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
    function createModuleStates(module) {

      angular.module(module.name, module.dependencies)
      .config(function(jdStatesProvider, $stateProvider) {

        jdStatesProvider.initStates($stateProvider, module.states);
      });
    }

//------------------------------------------------------------------------------

    // Create the main module and the shared module for exposing modules
    angular.module(config.app.name, moduleNames.concat(config.app.dependencies))
    .config(function ($stateProvider, jdStatesProvider, modulesProvider, $urlRouterProvider) {

      // Set up the states off the application
      modulesProvider.initModules($stateProvider, config.modules);
      jdStatesProvider.initStates($stateProvider, config.app.states);


      // If the URL path is not found, reroute to
      // the /notFound page
      $urlRouterProvider.otherwise('/notFound');
    });

//------------------------------------------------------------------------------

    // Create the modules
    for (var i in config.modules) {
      angular.module(config.modules[i].name, config.modules[i].dependencies)

      if (config.modules[i].states.length) {
        createModuleStates(config.modules[i]);
      }
    }

//------------------------------------------------------------------------------

  } catch (err) {
    console.error(err);
  }

})();
