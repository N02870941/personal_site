(function() {
  try {
    angular.module('shared')
      .provider("jdStates", function jdStatesProvider() {

        /**
         * Provided a list of states with names, urls, around
         * templates, this function creates angular states that
         * correspond to the object so that the user can navigate
         * to them via the url
         *
         * @param stateProvider Wrapper around $stateProvider
         * @param states List of states to instantiate
         */
        this.initStates = function(stateProvider, states) {

          // Dynamically set up each state
          // via the $stateProvider
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


  } catch (err) {
    console.error(err);
  }

})();
