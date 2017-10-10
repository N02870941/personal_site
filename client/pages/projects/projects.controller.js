app.controller('projectsController', function($scope) {


  $scope.projects = [
    {
      name: "Being Black and Getting Your Foot in the Door",
      href:'#!/projects/mlt',
      img: "/client/pages/projects/img/thumbnail/mlt.jpg",
      brief: "A collaboration with Kadeen Douglas and Dr. Cruz Caridad Bueno of " +
             "the Black Studies Department at SUNY New Paltz to assist students of " +
             "color kickstart their professional development"
    },
    {
      name: "Two Summer Internships at Target",
      href:'#!/projects/target#top',
      img: "/client/pages/projects/img/thumbnail/target.png",
      brief: "Get a peek as to how I spent some of my summers at Target"
    }
  ];

});
