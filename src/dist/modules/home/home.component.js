(function() {
  try {
    angular.module('home').component('jdHome', {

      controller: function($location, $window) {
        this.title = "Welcome to " + indexConfig.author.replace(/\s/g, '') + ".com!";

        this.facts = [
          "I am ambidextrous",
          "I'm a Software Engineer who loves to code",
          "An (aspiring) World traveler",
          "I lived in Ecuador for 5 months",
          "I skip leg day and I don't care",
          "Struggling to be vegetarian"
        ];
      },

      templateUrl: "client/modules/home/home.template.html",
      css: "client/modules/home/home.style.css"
    });

  } catch (err) {
    console.error(err);
  }

})();
