app.controller('ecuadorController', function($scope) {

  $scope.toggleLanguage = function() {
    $scope.spanish = !$scope.spanish;

    if ($scope.spanish) {
      $("#toggle-button").html('View in English');

    } else {

      $("#toggle-button").html('Ver en Español');
    }
  }

//------------------------------------------------------------------------------

  function init() {
    $scope.spanish = true;
    $scope.toggleLanguage();
  }

  init();

});
