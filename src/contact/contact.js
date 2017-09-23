
// Register controllers and directives
app.controller("contactController", function ($scope) {

  $scope.methodsOfContact = [
    {
      alt: "email",
      href: "mailto:jabari.dash@gmail.com",
      iconClass: "fa fa-envelope fa-5x",
      text: "To reach out personally, send an email!"
    },
    {
      alt: "linkedin",
      href: "https://www.linkedin.com/in/jabaridash/",
      iconClass: "fa fa-linkedin fa-5x",
      text: "See Jabari's LinkedIn profile to get a more in depth perspective on his professional track record."
    },
    {
      alt: "facebook",
      href: "https://www.facebook.com/dashjabari",
      iconClass: "fa fa-facebook fa-5x",
      text: "Keep up with Jabari on Facebook on Facebook."
    },
    {
      alt: "github",
      href: "https://github.com/N02870941",
      iconClass: "fa fa-github fa-5x",
      text: "If you would like to see some of Jabari's projects and coding examples, visit him on GitHub."
    },
    {
      alt: "instagram",
      href: "https://www.instagram.com/jabaridash/",
      iconClass: "fa fa-instagram fa-5x",
      text: "Follow Jabari on Instagram to see some of his latest photos!"
    }
  ];

});
