client.controller('footerController', function($scope) {

  $scope.options = [
    // {
    //   href: "mailto:jabari.dash@gmail.com",
    //   icon_class: "fa fa-envelope fa-3x"
    // },
    {
      href: "https://www.linkedin.com/in/jabaridash/",
      icon_class: "fa fa-linkedin fa-3x icon"
    },
    {
      href: "https://www.facebook.com/dashjabari",
      icon_class: "fa fa-facebook-official fa-3x icon"
    },
    {
      href: "https://github.com/N02870941",
      icon_class: "fa fa-github fa-3x icon"
    },
    {
      href: "https://www.instagram.com/jabaridash/",
      icon_class: "fa fa-instagram fa-3x icon"
    }
  ];

});


client.directive('footer', function() {
  return {
    templateUrl: 'client/core/directives/footer/footer.html'
  };

});
