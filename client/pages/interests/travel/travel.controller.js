app.controller('travelController', function($scope) {

  $scope.showAllText = function() {
    $scope.showAll = !$scope.showAll;
  }

//------------------------------------------------------------------------------

  $scope.showAll = false;

  $scope.countries = [
    {
      name: "Colombia",
      href:'#!/interests/travel/colombia#top',
      flag: "/client/pages/interests/travel/countries/colombia/img/flag_colombia.png",
      brief: ""
    },
    {
      name: "Ecuador",
      href: '#!/interests/travel/ecuador#top',
      flag: "/client/pages/interests/travel/countries/ecuador/img/flag_ecuador.png",
      brief: ""
    },
    {
      name: "Peru",
      href: '#!/interests/travel/peru#top',
      flag: "/client/pages/interests/travel/countries/peru/img/flag_peru.png",
      brief: ""
    }
  ];
});
