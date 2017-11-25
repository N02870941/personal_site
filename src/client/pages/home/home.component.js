app.component('myHome', {

  controller: function($location, $window) {
    this.title = "Welcome to JabariDash.com!";

    // TODO - Protect against rogue domains
    // if ($location.absUrl() != "http://jabaridash.com/#!/home") {
    //   alert('THIS PAGE IS FAKE');
    //
    //   $window.location.href = 'http://google.com'
    // }

    this.facts = [
      "I can't put a problem down until I solve it",
      "I'm a Software Engineer who loves to code",
      "An (aspiring) World traveler",
      "I skip leg day and I don't care",
      "I do math during my free time",
      "I pet dogs in the street - domestic or wild",
      "Struggling to be vegetarian"
    ];

    this.$onInit = function() {

      // Fix the padding for the lines
      // NOTE - find a better fix to get rid of CSS
      document.getElementById("left").style.float = "left";
      document.getElementById("left").style.width = "65%";
      document.getElementById("left").style.overflow = "hidden";

      document.getElementById("right").style.overflow = "hidden";

      document.getElementById("fun-facts").style.padding = 0;
    }
  },

  templateUrl: "client/pages/home/templates/home.template.html"
});
