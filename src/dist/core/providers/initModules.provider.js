(function() {
  try {
    angular.module(config.app.name).provider("modules", function modulesProvider() {

      this.f = function() {
        console.log('f()');
      }

      /**
       * Creates an angular module
       *
       * @param module Module specification
       */
      this.createModuleStates = function(module) {
        angular.module(module.name, module.dependencies)
        .config(function(jdStatesProvider, $stateProvider) {

          jdStatesProvider.initStates($stateProvider, module.states);
        });
      }

      this.initModules = function(stateProvider, modules, jd) {

        // Dynamically set up each state
        // for each module
        for (var i in modules) {

          // if we want to show the module
          if (modules[i].header) {

            // TODO - Convert camel case to hyphenated, etc.
            t = "<jd-" + modules[i].name + " title='" + modules[i].name.charAt(0).toUpperCase() + modules[i].name.slice(1) +"'>" + "</jd-" + modules[i].name+">";

            stateProvider
              .state(modules[i].name, {
                url: "/" + modules[i].name,

                // TODO - Write a function that converts module name so that
                // support for names with more than one word is supported
                template: t
              })
          }


        }
      };

      this.$get = ['modulesToken', function(modulesToken) {
        return new LocalModulesService();
      }];
    });

  } catch (err) {
    console.error(err);
  }

})();
