app.directive('interests', function() {
  return {
    templateUrl: "client/pages/interests/interests.menu.html"
  }
});


app.controller('interestsController', function($scope) {

  $scope.interests = [
    {
      name: "Travel",
      href:'#!/interests/travel',
      img: "/client/pages/interests/travel/img/thumbnail/travel.jpg",
      brief: "Check out some of my most recent national and international journies!"
    },
    {
      name: "Photography",
      href:'#!/interests/photography',
      img: "/client/pages/interests/photography/img/thumbnail/photography.jpg",
      brief: "See some of my favorite photos that I have taken!"
    },
    {
      name: "Fitness",
      href:'#!/interests/fitness',
      img: "/client/pages/interests/fitness/img/thumbnail/fitness.jpg",
      brief: "Here are some of my thoughts on fitness and the role it has played in my life."
    },
    {
      name: "Culture",
      href:'#!/interests/culture',
      img: "/client/pages/projects/img/thumbnail/algorithms.png",
      brief: "INSERT EXPLANATION HERE!"
    }
  ];
});
