// Set  up routing for whole site
app.config(function ($stateProvider, $urlRouterProvider) {

  var modules = [
    'biography',
    'contact',
    'home',
    'interests',
    'projects',
    'resume',
    'tech'
  ];

  // Dynamically set up each state
  for (var i in modules) {
    $stateProvider
      .state(modules[i], {
        url: "/" + modules[i],
        template: "<jd-" + modules[i]+">" + "</jd-" + modules[i]+">"
      })
  }

  $urlRouterProvider.otherwise('/notFound');

  // TODO - Dynamically create states
  // for main pages (home, bio, etc)
  // Then manually route for sub-pages
  // TODO Remember to 'normalise' css so
  // it looks the same on each browser
  $stateProvider
    .state('default', {
      url: "/",
      template: "<jd-home></jd-home>"
    })

    .state('notFound', {
      url: '/notFound',
      template: "<jd-not-found></jd-not-found>"
    })

    .state('rogueDomain', {
      url: '/rogueDomain',
      template: "<jd-rogue-domain></jd-rogue-domain>"
    })
});
