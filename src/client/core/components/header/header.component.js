app.component('myHeader', {

  templateUrl: 'client/core/components/header/header.template.html',

  controller: function() {

    var vm = this;

    this.hrefs = [
      {
        text: "Home",
        href: "#!home"
      },

      {
        text: "Biography",
        href: "#!biography"
      },

      {
        text: "Resume",
        href: "#!resume"
      },
      {
        text: "Projects",
        href: "#!projects"
      },
      {
        text: "Tech",
        href: "#!tech"
      },
      {
        text: "Interests",
        href: "#!interests"
      },
      {
        text: "Contact",
        href: "#!contact"
      }
    ];

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

    this.hideNavBarOptions = function() {

      var navBar = document.getElementById("myTopnav");

      navBar.className = 'topnav';

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

//------------------------------------------------------------------------------
  }
});
