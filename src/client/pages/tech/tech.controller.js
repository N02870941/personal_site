app.controller('techController', function($scope) {


  $scope.projects = [
    {
      name: "Discrete and Continuous Algorithms and Data Structures",
      href:'#!/tech/algorithms#top',
      img: "/client/pages/tech/img/thumbnail/algorithms.png",
      brief: "C++ Implementation of common data structures and associate algorithms and interview questions"
    },
    {
      name: "Linear and Nonlinear Regression",
      href:'#!/tech/regression#top',
      img: "/client/pages/tech/img/thumbnail/regression.png",
      brief: "Basic Python UI that provided a data set displays best fit functions"
    },
    {
      name: "Temperature Collection at SUNY New Paltz",
      href:'#!/tech/temperature#top',
      img: "/client/pages/tech/img/thumbnail/temperature.jpg",
      brief: "Distributed Raspberry Pi based project where we collected temperature data and visualized on a website"
    },
    {
      name: "My Personal Website",
      href:'#!/tech/website#top',
      img: "/client/pages/tech/img/thumbnail/website.jpg",
      brief: "This website was completely written by me!"
    }
  ];

});
