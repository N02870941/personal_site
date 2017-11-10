app.controller('headerController', function($scope) {

  /**
   * This function changes the class name of the
   * topnav from "topnav" to "topnav response" and
   * vice versa. Essentially, when this happens,
   * the css for the respective configuration will load.
   * When it is jsut "topnav," it will load it in desktop
   * mode, when it is "topnav responsive," it will render
   * itself for mobile devices
   */
  $scope.navBar = function() {
    var topnav = document.getElementById("myTopnav");

    // Switch class name to the mobile version
    if (topnav.className === "topnav") {
        topnav.className += " responsive";

      // Switch class name to desktop version
    } else {
        topnav.className = "topnav";
    }
  }

//------------------------------------------------------------------------------

  /**
   * Hide the topnav options by switching
   */
  $scope.hideNavBarOptions = function() {
    var navBar = document.getElementById("myTopnav");

    navBar.className = 'topnav';
  }

//------------------------------------------------------------------------------

 /**
  * If click a click event happens outside of topnav,
  * hide it
 */
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

}); // End of headerController
