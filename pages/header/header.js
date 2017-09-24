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
});

app.directive('header', function() {
  return {
    templateUrl: 'pages/header/header.html'
  };
})
