app.component('myHeader', {

  controller: function() {

    this.navBar = function() {
      var topnav = document.getElementById("myTopnav");

      // Switch class name to the mobile version
      if (topnav.className === "topnav") {
          topnav.className += " responsive";

        // Switch class name to desktop version
      } else {
          topnav.className = "topnav";
      }
    }

    var hideNavBarOptions = function() {
      var navBar = document.getElementById("myTopnav");

      navBar.className = 'topnav';
    }

   $(document).ready(function() {
      $(document).click(function(e) {
          if ($(e.target).is('#myTopnav,#myTopnav *')) {
              return;
          }
          else {
              hideNavBarOptions();
          }
      });
    });
  },


  templateUrl: 'client/core/components/header/header.template.html'

});
