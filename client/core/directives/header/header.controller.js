app.controller('headerController', function($scope) {

  $scope.options = [
    {
        name: "home",
        href: "#!home",
        text:"Home"
    },
    {
        name: "biography",
        href: "#!biography",
        text:"Biography"
    },
    {
        name: "resume",
        href: "#!resume",
        text:"Resume"
    },
    {
        name: "projects",
        href: "#!projects",
        text:"Tech Projects"
    },
    {
        name: "interests",
        href: "#!interests",
        text:"Interests"
    },
    {
        name: "contact",
        href: "#!contact",
        text:"Contact"
    }
  ];

  $scope.myFunction = function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }


});

app.directive('header', function() {
  return {
    templateUrl: 'client/core/directives/header/header.html'
  };
})
