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
     * Detect whether a hashchange came from a back button
     * click, or a forward (or URL) click
     */
    //  TODO - find a better solution
    var detectBackOrForward = function(onBack, onForward) {
      hashHistory = [window.location.hash];
      historyLength = window.history.length;

      return function() {
        var hash = window.location.hash, length = window.history.length;
        if (hashHistory.length && historyLength == length) {
          if (hashHistory[hashHistory.length - 2] == hash) {
            hashHistory = hashHistory.slice(0, -1);
            onBack();
          } else {
            hashHistory.push(hash);
            onForward();
          }
        } else {
          hashHistory.push(hash);
          historyLength = length;
        }
      }
    };

//------------------------------------------------------------------------------

    // Create the main module for the app
    angular.module(config.app.name, moduleNames.concat(config.app.dependencies))
    .config(['$stateProvider',
             'jdStatesProvider',
             'modulesProvider',
             '$urlRouterProvider',

             function ($stateProvider,
                       jdStatesProvider,
                       modulesProvider,
                       $urlRouterProvider) {

      // Set up the states of the main modules the application
      modulesProvider.initMainModulesStates($stateProvider, config.modules);
      jdStatesProvider.initStates($stateProvider, config.app.states);

      // If the URL path is not found, reroute to
      // the /notFound page
      $urlRouterProvider.otherwise('/notFound');
    }]);

    angular.module(config.app.name)
    .run(function($window) {

      $($window).bind('hashchange', function () {

        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        console.log(top);

        // $anchorScroll();

        // (function() {
        //   $("html,body").animate({
        //     scrollTop:$(".thetop").offset().top
        //   },"1000");
        //
        //   return false;
        // })();

      });

    })

//------------------------------------------------------------------------------

    /**
     * Initializes the states of a provided modules
     *
     * @param module Module specification
     */
    function createModuleStates(module) {

      angular.module(module.name)
      .config(['jdStatesProvider', '$stateProvider', function(jdStatesProvider, $stateProvider) {

        jdStatesProvider.initStates($stateProvider, module.states);
      }]);
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

  } catch (err) {
    console.error(err);
  }

})();
