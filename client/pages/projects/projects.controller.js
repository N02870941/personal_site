app.controller('projectsController', function($scope) {


  $scope.projects = [
    {
      name: "Discrete and Continuous Algorithms and Data Structures",
      href:'#!/projects/algorithms',
      img: "/client/pages/projects/img/thumbnail/algorithms.png",
      brief: "C++ Implementation of common data structures and associate algorithms and interview questions"
    },
    {
      name: "Linear and Nonlinear Regression",
      href:'#!/projects/regression',
      img: "/client/pages/projects/img/thumbnail/regression.png",
      brief: "Basic Python UI that provided a data set displays best fit functions"
    },
    {
      name: "Two Summer Internships at Target",
      href:'#!/projects/target',
      img: "/client/pages/projects/img/thumbnail/target.png",
      brief: "Get a peek as to how I spent some of my summers at Target"
    },
    {
      name: "Temperature Collection at SUNY New Paltz",
      href:'#!/projects/temperature',
      img: "/client/pages/projects/img/thumbnail/temperature.jpg",
      brief: "Distributed Raspberry Pi based project where we collected temperature data and visualized on a website"
    },
    {
      name: "My Personal Website",
      href:'#!/projects/website',
      img: "/client/pages/projects/img/thumbnail/website.jpg",
      brief: "This website was completely written by me!"
    }
  ];

});
