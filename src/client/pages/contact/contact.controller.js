
// Register controllers and directives
app.controller("contactController", function ($scope) {

  $scope.methodsOfContact = [
    {
      alt: "email",
      href: "mailto:jabari.dash@gmail.com",
      iconClass: "fa fa-envelope fa-5x",
      text: "To reach out personally, send me email at jabari.dash@gmail.com",
      target: ""
    },
    {
      alt: "linkedin",
      href: "https://www.linkedin.com/in/jabaridash/",
      iconClass: "fa fa-linkedin fa-5x",
      text: "See my LinkedIn profile to get a more in depth perspective on my professional background.",
      target: "_blank"
    },
    {
      alt: "facebook",
      href: "https://www.facebook.com/dashjabari",
      iconClass: "fa fa-facebook fa-5x",
      text: "Keep up with me on Facebook.",
      target: "_blank"
    },
    {
      alt: "instagram",
      href: "https://www.instagram.com/jabaridash/",
      iconClass: "fa fa-instagram fa-5x",
      text: "Follow me on Instagram to see some of my latest photos!",
      target: "_blank"
    },
    {
      alt: "github",
      href: "https://github.com/N02870941",
      iconClass: "fa fa-github fa-5x",
      text: "If you would like to see some of my projects and coding examples, visit me on GitHub.",
      target: "_blank"
    },
    {
      alt: "stack-overflow",
      href: "https://stackoverflow.com/users/5063151/jabari-dash",
      iconClass: "fa fa-stack-overflow fa-5x",
      text: "See some of my answers on Stack Overflow",
      target: "_blank"
    }

  ];

});