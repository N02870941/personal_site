app.controller('interestsController', function($scope) {

  $scope.interests = [
    {
      title: "Travel",
      id: 'travel',
      href:'#!/interests/travel#top',
      img: "/client/pages/interests/travel/img/thumbnail/travel.jpg",
      brief: "Check out some of my most recent national and international journies!"
    },
    {
      title: "Photography",
      id: 'photography',
      href:'#!/interests/photography#top',
      img: "/client/pages/interests/photography/img/thumbnail/photography.jpg",
      brief: "See some of my favorite photos that I have taken!"
    },
    {
      title: "Fitness",
      id: 'fitness',
      href:'#!/interests/fitness#top',
      img: "/client/pages/interests/fitness/img/thumbnail/fitness.jpg",
      brief: "Here are some of my thoughts on fitness and the role it has played in my life."
    },
    {
      title: "Culture",
      id: 'culture',
      href:'#!/interests/culture#top',
      img: "/client/pages/interests/culture/img/thumbnail/culture.jpg",
      brief: "Follow my hair journey and other cultural experiences."
    }
  ];
});
