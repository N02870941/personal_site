//Create the module
var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: "src/home/home.html",
      controller: "mainController"
    })

    .when('/home', {
      templateUrl: "src/home/home.html",
      controller: "mainController"
    })

    .when('/biography', {
      templateUrl: "src/biography/biography.html",
      controller: "mainController"
    })

    .when('/resume', {
      templateUrl: "src/resume/resume.html",
      controller: "mainController"
    })

    .when('/projects', {
      templateUrl: "src/projects/projects.html",
      controller: "mainController"
    })

    .when('/travel', {
      templateUrl: "src/interests/travel/travel.html"
    })

    .when('/photography', {
      templateUrl: "src/interests/photography/photography.html"
    })

    .when('/fitness', {
      templateUrl: "src/interests/fitness/fitness.html"
    })

    .when('/hair', {
      templateUrl: "src/interests/hair/hair.html"
    })

    .when('/contact', {
      templateUrl: "src/contact/contact.html",
      controller: "mainController"
    });
});

// Directives
//------------------------------------------------------------------------------

var header = function() {
  return {
    templateUrl: 'src/header/header.html'
  };
}

var footer = function() {
  return {
    templateUrl: 'src/footer/footer.html'
  };
}

// Controller
//------------------------------------------------------------------------------

//Create the controller
var mainController = function ($scope, $location, $log) {

  // TODO - add logic here

}

// Register controllers and directives
app.controller("mainController", mainController);
app.directive("header", header);
app.directive("footer", footer);
