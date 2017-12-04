(function() {
  try {
    angular.module('shared')
      .provider("jdStates", function jdStatesProvider() {
        
        this.initStates = function(stateProvider, states) {

          // Dynamically set up each state
          for (var i in states) {
            stateProvider.state(states[i].name, {
              url: states[i].url,
              template: states[i].template
            });
          }
        };

        this.getStates = function(modules, name) {
          var states = {};

            for (var i in modules) {
              if (modules[i].name == name)
                states = modules[i].states;
            }

          return states;
        }

        this.$get = ['statesToken', function(statesToken) {
          return new LocalStatesService();
        }];
    });


  } catch (err) {
    console.error(err);
  }

})();
