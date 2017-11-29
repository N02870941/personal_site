app.component('myHome', {

  controller: function($location, $window) {
    this.title = "Welcome to JabariDash.com!";

    this.facts = [
      "I am ambidextrous",
      "I'm a Software Engineer who loves to code",
      "An (aspiring) World traveler",
      "I lived in Ecuador for 5 months"
      "I skip leg day and I don't care",
      "Struggling to be vegetarian"
    ];
  },

  templateUrl: "client/pages/home/home.template.html",
  css: "client/pages/home/home.style.css"
});
