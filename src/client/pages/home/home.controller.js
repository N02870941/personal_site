app.controller("homeController", function($scope, $location, $window) {

  // TODO - Protect against rogue domains
  // if ($location.absUrl() != "http://jabaridash.com/#!/home") {
  //   alert('THIS PAGE IS FAKE');
  //
  //   $window.location.href = 'http://google.com'
  // }

  $scope.facts = [
    "I can't put a problem down until I solve it",
    "Yo aprendí Español para demostrarme a mí mismo que soy capaz de cualquier cosa",
    "I'm a Software Engineer who loves to code",
    "An (aspiring) World traveler",
    "I skip leg day and I don't care",
    "I do math in my free time",
    "I pet dogs in the street - domestic or wild",
    "Struggling to be vegetarian!!!!!!!"
  ];
});
