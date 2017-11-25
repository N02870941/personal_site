
// Create the module
var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ngSanitize', 'angularCSS'])
                 .run(function ($rootScope) {
                   $rootScope.title = "Jabari Dash";
                   $rootScope.domain = "jabaridash.com"
                 });
