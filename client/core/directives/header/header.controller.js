app.controller('headerController', function($scope) {

//------------------------------------------------------------------------------

  $scope.navBar = function() {
    var x = document.getElementById("myTopnav");

    // Switch class to the mobile version
    if (x.className === "topnav") {
        x.className += " responsive";

      // Switch to regular
    } else {
        x.className = "topnav";
    }
  }

//------------------------------------------------------------------------------

  /**
   * Hide the topnav options
   */
  $scope.hideNavBarOptions = function() {
    var navBar = document.getElementById("myTopnav");

    navBar.className = 'topnav';
  }

 // Set up so that that if click outside of topnav, it hides itself
 $(document).ready(function() {
    $(document).click(function(e) {
        if ($(e.target).is('#myTopnav,#myTopnav *')) {
            return;
        }
        else {
            $scope.hideNavBarOptions();
        }
    });
  });
});

//------------------------------------------------------------------------------

app.directive('header', function() {
  return {
    templateUrl: 'client/core/directives/header/header.html'
  };
})

//------------------------------------------------------------------------------

app.directive('ngEsc', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress keyup", function (event) {
            if(event.which === 27) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEsc);
                });

                event.preventDefault();
            }
        });
    };
});
