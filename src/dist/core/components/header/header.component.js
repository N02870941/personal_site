(function() {
  try {
    angular.module(config.app.name).component('jdHeader', {

      css: "client/core/components/header/header.css",
      templateUrl: 'client/core/components/header/header.template.html',

      controller: function() {

        this.modules = (function() {
          var array = [];

          // Loop through the modules, storing
          // only their names. This array will be
          // used to initilize the links in the topnav bar
          for (var i in config.modules) {
            if (config.modules[i].header) {
              array.push(config.modules[i].name);
            }
          }

          return array;
        })();

        var vm = this;

  //------------------------------------------------------------------------------

        /**
         * Toggles the navbar between responsive and normal mode
         * by changing the css class
         */
        this.navBar = function() {
          var navbar = document.getElementById("myTopnav");

          // Switch class name to the mobile version
          if (navbar.className === "navbar") {
              navbar.className += " responsive";

            // Switch class name to desktop version
          } else {
              navbar.className = "navbar";
          }
        }

  //------------------------------------------------------------------------------

        /**
         * Hides the options when the topnav is in
         * responsive mode, and the user has opened
         * the menu of options
         */
        this.hideNavBarOptions = function() {

          var navBar = document.getElementById("myTopnav");

          navBar.className = 'navbar';
        }

    //------------------------------------------------------------------------------

        /**
         * Decide whether or not to load the page
         * in responsive mode or not
         */
        this.$onInit= function() {

          $(document).ready(function() {
             $(document).click(function(e) {
                 if ($(e.target).is('#myTopnav,#myTopnav *')) {
                     return;
                 }
                 else {

                   vm.hideNavBarOptions();
                 }
             });
           });
        }
      }
    });

  } catch (err) {
    console.error(err);
  }


})();
