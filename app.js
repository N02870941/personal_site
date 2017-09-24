// Create the module
var app = angular.module("app", ['ngRoute', 'ngAnimate']);

// Set  up routing for whole site
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: "pages/home/home.html"
    })

    .when('/home', {
      templateUrl: "pages/home/home.html"
    })

    .when('/biography', {
      templateUrl: "pages/biography/biography.html"
    })

    .when('/resume', {
      templateUrl: "pages/resume/resume.html"
    })

    .when('/projects', {
      templateUrl: "pages/projects/projects.html"
    })

    .when('/travel', {
      templateUrl: "pages/interests/travel/travel.html"
    })

    .when('/travel/colombia', {
      templateUrl: "pages/interests/travel/countries/colombia/colombia.html"
    })

    .when('/travel/ecuador', {
      templateUrl: "pages/interests/travel/countries/ecuador/ecuador.html"
    })

    .when('/travel/peru', {
      templateUrl: "pages/interests/travel/countries/peru/peru.html"
    })

    .when('/photography', {
      templateUrl: "pages/interests/photography/photography.html"
    })

    .when('/fitness', {
      templateUrl: "pages/interests/fitness/fitness.html"
    })

    .when('/culture', {
      templateUrl: "pages/interests/culture/culture.html"
    })

    .when('/contact', {
      templateUrl: "pages/contact/contact.html"
    });
});


// Register controllers and directives
//------------------------------------------------------------------------------

app.controller("mainController", function() {

  // TODO - Add logic if necessary

});
