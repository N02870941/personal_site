// TODO - Take these out of the global scope!!!
// Get the from the json file via require()
var moduless = [
  'home',
  'biography',
  'resume',
  'projects',
  'tech',
  'interests',
  'contact',
  // 'example'  // NOTE - this show the simplicity of adding a new entry
];

//------------------------------------------------------------------------------

var dependencies = [
  'shared',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'angularCSS',
  'ui.router'
];

//------------------------------------------------------------------------------

// Create the module
var app = angular.module("app", moduless.concat(dependencies));
