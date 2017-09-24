client.controller('travelController', function($scope) {

  $scope.countries = [
    {
      name: "Colombia",
      href:'#!/travel/colombia',
      flag: "/client/pages/interests/travel/countries/colombia/img/flag_colombia.png",
      brief: ""
    },
    {
      name: "Ecuador",
      href: '#!/travel/ecuador',
      flag: "/client/pages/interests/travel/countries/ecuador/img/flag_ecuador.png",
      brief: ""
    },
    {
      name: "Peru",
      href: '#!/travel/peru',
      flag: "/client/pages/interests/travel/countries/peru/img/flag_peru.png",
      brief: ""
    }
  ];
});
