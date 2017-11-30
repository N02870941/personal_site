// Set  up routing for whole site
app.config(function ($stateProvider, $urlRouterProvider, modules) {

  function initializeStates(states) {
    for (var i in states) {
      $stateProvider.state(states[i].name, {
        url: states[i].url,
        template: states[i].template
      });
    }
  }

  app.constant('initializeStates', initializeStates);

  var states = [
    {
      name: "default",
      url: "",
      template: "<jd-home></jd-home>"
    },
    {
      name: 'default1',
      url: "/",
      template: "<jd-home></jd-home>"
    },
    {
      name: 'notFound',
      url: '/notFound',
      template: "<jd-not-found></jd-not-found>"
    },
    {
      name: "rogueDomain",
      url: '/rogueDomain',
      template: "<jd-rogue-domain></jd-rogue-domain>"
    }
  ];

  initializeStates(states);

  // Dynamically set up each state
  for (var i in modules) {
    $stateProvider
      .state(modules[i], {
        url: "/" + modules[i],

        // TODO - Write a function that converts module name so that
        // support for names with more than one word is supported
        template: "<jd-" + modules[i]+">" + "</jd-" + modules[i]+">"
      })
  }

  $urlRouterProvider.otherwise('/notFound');
});
