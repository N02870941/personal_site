client.directive('interests', function() {
  return {
    templateUrl: "client/pages/interests/interests.menu.html"
  }
});


client.controller('interestsController', function($scope) {

  $scope.interests = [
    {
      name: "Travel",
      href:'#!/interests/travel',
      img: "/client/pages/interests/travel/img/travel.jpg",
      brief: "Check out some of my most recent nation and international journies!"
    },
    {
      name: "Photography",
      href:'#!/interests/photography',
      img: "/client/pages/interests/photography/img/photography.jpg",
      brief: "Check out some of my most recent nation and international journies!"
    },
    {
      name: "Fitness",
      href:'#!/interests/fitness',
      img: "/client/pages/interests/fitness/img/fitness.jpg",
      brief: "Check out some of my most recent nation and international journies!"
    },
    {
      name: "Culture",
      href:'#!/interests/culture',
      img: "/client/pages/projects/img/algorithms.png",
      brief: "Check out some of my most recent nation and international journies!"
    }
  ];
});
