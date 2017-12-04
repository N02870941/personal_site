(function() {
  try {
    angular.module(config.app.name).component('jdHeader', {

      css: "client/core/components/header/header.css",
      templateUrl: 'client/core/components/header/header.template.html',

      controller: function() {

        this.modules = (function() {
          var array = [];

          for (var i in config.modules) {
            if (config.modules[i].header) {
              array.push(config.modules[i].name);
            }
          }

          return array;
        })();

        var vm = this;

  //------------------------------------------------------------------------------

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

        this.hideNavBarOptions = function() {

          var navBar = document.getElementById("myTopnav");

          navBar.className = 'navbar';
        }

    //------------------------------------------------------------------------------

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
