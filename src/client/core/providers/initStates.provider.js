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

    this.$get = ['statesToken', function(statesToken) {
      return new LocalStatesService();
    }];
  });
