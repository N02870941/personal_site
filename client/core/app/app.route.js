// Set  up routing for whole site
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/home', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/biography', {
      templateUrl: "client/pages/biography/biography.html"
    })

    .when('/resume', {
      templateUrl: "client/pages/resume/resume.html"
    })

    .when('/projects', {
      templateUrl: "client/pages/projects/projects.html"
    })

    .when('/projects/algorithms', {
      templateUrl: "client/pages/projects/projects/algorithms.html"
    })

    .when('/projects/regression', {
      templateUrl: "client/pages/projects/projects/regression.html"
    })

    .when('/projects/target', {
      templateUrl: "client/pages/projects/projects/target.html"
    })

    .when('/projects/temperature', {
      templateUrl: "client/pages/projects/projects/temperature.html"
    })

    .when('/projects/website', {
      templateUrl: "client/pages/projects/projects/website.html"
    })

    .when('/interests', {
      templateUrl: "client/pages/interests/interests.html"
    })

    .when('/interests/travel', {
      templateUrl: "client/pages/interests/travel/travel.html"
    })

    .when('/interests/travel/colombia', {
      templateUrl: "client/pages/interests/travel/countries/colombia/colombia.html"
    })

    .when('/interests/travel/ecuador', {
      templateUrl: "client/pages/interests/travel/countries/ecuador/ecuador.html"
    })

    .when('/interests/travel/peru', {
      templateUrl: "client/pages/interests/travel/countries/peru/peru.html"
    })

    .when('/interests/photography', {
      templateUrl: "client/pages/interests/photography/photography.html"
      // resolve: {
      //   images: function (photographyService) {
      //     console.log("loading");
      //     return photographyService.getPhotoPaths;
      //   }
      // }
    })

    .when('/interests/fitness', {
      templateUrl: "client/pages/interests/fitness/fitness.html"
    })

    .when('/interests/culture', {
      templateUrl: "client/pages/interests/culture/culture.html"
    })

    .when('/contact', {
      templateUrl: "client/pages/contact/contact.html"
    });
});
