(function() {
  try {
    angular.module('app').provider("modules", function modulesProvider() {
      this.initModules = function(stateProvider, modules) {

        // Dynamically set up each state
        // for each module
        for (var i in modules) {

          // TODO - Convert camel case to hyphenated, etc.
          t = "<jd-" + modules[i]+ " title='" + modules[i].charAt(0).toUpperCase() + modules[i].slice(1) +"'>" + "</jd-" + modules[i]+">";

          stateProvider
            .state(modules[i], {
              url: "/" + modules[i],

              // TODO - Write a function that converts module name so that
              // support for names with more than one word is supported
              template: t
            })
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
