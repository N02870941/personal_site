(function() {
  try {
    angular.module(config.app.name).provider("modules", function modulesProvider() {

      /**
       * Creates the states for the main modules that are in the
       * top navigation bar of the app. Example, if the page is
       * sectioned into [home, biography, and resume], This function
       * creates states for when the url is '/home', '/biography',
       * and '/resume'. NOTE / TODO - As of right now, main modules must
       * be composed of one word because automatic conversion from
       * aSnakeCaseName to a-snake-case-name has not been implemented
       *
       * @param stateProvider Wrapper around the $stateProvider for
       * instatiating new angular states
       *
       * @param modules The list of modules to create states for
       */
      this.initMainModulesStates = function(stateProvider, modules) {

        // Dynamically create a state for each module
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
