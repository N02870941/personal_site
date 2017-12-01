// Set  up routing for whole site
app.config(function ($stateProvider, $urlRouterProvider, modules, modulesProvider, jdStatesProvider) {
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

  modulesProvider.initModules($stateProvider, modules);
  jdStatesProvider.initStates($stateProvider, states);

  $urlRouterProvider.otherwise('/notFound');
});
