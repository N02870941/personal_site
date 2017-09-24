// Create the module
var client = angular.module("app", ['ngRoute', 'ngAnimate']);

// Set  up routing for whole site
client.config(function ($routeProvider) {

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

    .when('/travel', {
      templateUrl: "client/pages/interests/travel/travel.html"
    })

    .when('/travel/colombia', {
      templateUrl: "client/pages/interests/travel/countries/colombia/colombia.html"
    })

    .when('/travel/ecuador', {
      templateUrl: "client/pages/interests/travel/countries/ecuador/ecuador.html"
    })

    .when('/travel/peru', {
      templateUrl: "client/pages/interests/travel/countries/peru/peru.html"
    })

    .when('/photography', {
      templateUrl: "client/pages/interests/photography/photography.html"
    })

    .when('/fitness', {
      templateUrl: "client/pages/interests/fitness/fitness.html"
    })

    .when('/culture', {
      templateUrl: "client/pages/interests/culture/culture.html"
    })

    .when('/contact', {
      templateUrl: "client/pages/contact/contact.html"
    });
});


// Register controllers and directives
//------------------------------------------------------------------------------

client.controller("mainController", function() {

  // TODO - Add logic if necessary

});
