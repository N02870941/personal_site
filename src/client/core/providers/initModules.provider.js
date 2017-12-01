app.provider("modules", function modulesProvider() {
  this.initModules = function(stateProvider, modules){

    // Dynamically set up each state
    for (var i in modules) {
      stateProvider
        .state(modules[i], {
          url: "/" + modules[i],

          // TODO - Write a function that converts module name so that
          // support for names with more than one word is supported
          template: "<jd-" + modules[i]+">" + "</jd-" + modules[i]+">"
        })
    }
  };

  this.$get = ['modulesToken', function(modulesToken) {
    return new LocalModulesService();
  }];
});
