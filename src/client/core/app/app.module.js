// TODO - Take these out of the global scope!!!

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
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'angularCSS',
  'ui.router'
];

//------------------------------------------------------------------------------

var initializeStates = function(stateProvider, states) {
  for (var i in states) {
    stateProvider.state(states[i].name, {
      url: states[i].url,
      template: states[i].template
    });
  }
}

//------------------------------------------------------------------------------

// Create the module
var app = angular.module("app", moduless.concat(dependencies));

app.constant('modules', [
  'home',
  'biography',
  'resume',
  'projects',
  'tech',
  'interests',
  'contact',
  // 'example'  // NOTE - this show the simplicity of adding a new entry
])

  .run(function ($rootScope) {

    $rootScope.site = {
      title: "Jabari Dash",
      protocol: "http",
      domain: "jabaridash.com",
      port: "8080"
    }

    $rootScope.title = "Jabari Dash";
    $rootScope.domain = "jabaridash.com";
    $rootScope.port = "8080";
    $rootScope.methodsOfContact = [
      {
        alt: "email",
        href: "mailto:jabari.dash@gmail.com",
        iconClass: "fa-envelope",
        text: "To reach out personally, send me email at jabari.dash@gmail.com",
        target: "_self"
      },
      {
        alt: "linkedin",
        href: "https://www.linkedin.com/in/jabaridash/",
        iconClass: "fa-linkedin",
        text: "See my LinkedIn profile to get a more in depth perspective on my professional background.",
        target: "_blank"
      },
      {
        alt: "facebook",
        href: "https://www.facebook.com/dashjabari",
        iconClass: "fa-facebook",
        text: "Keep up with me on Facebook.",
        target: "_blank"
      },
      {
        alt: "instagram",
        href: "https://www.instagram.com/jabaridash/",
        iconClass: "fa-instagram",
        text: "Follow me on Instagram to see some of my latest photos!",
        target: "_blank"
      },
      {
        alt: "github",
        href: "https://github.com/N02870941",
        iconClass: "fa-github",
        text: "If you would like to see some of my projects and coding examples, visit me on GitHub.",
        target: "_blank"
      },
      {
        alt: "stack-overflow",
        href: "https://stackoverflow.com/users/5063151/jabari-dash",
        iconClass: "fa-stack-overflow",
        text: "See some of my answers on Stack Overflow",
        target: "_blank"
      }

    ];
});
