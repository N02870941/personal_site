(function() {
  angular.module('app').component('jdHeader', {

    css: "client/core/components/header/header.css",
    templateUrl: 'client/core/components/header/header.template.html',

    controller: function(modules) {

      this.modules = modules;

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

})();
