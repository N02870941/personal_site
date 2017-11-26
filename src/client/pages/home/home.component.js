app.component('myHome', {

  controller: function($location, $window) {
    this.title = "Welcome to JabariDash.com!";

    this.facts = [
      "I can't put a problem down until I solve it",
      "I'm a Software Engineer who loves to code",
      "An (aspiring) World traveler",
      "I skip leg day and I don't care",
      "I do math during my free time",
      "I pet dogs in the street - domestic or wild",
      "Struggling to be vegetarian"
    ];
  },

  templateUrl: "client/pages/home/templates/home.template.html",
  css: "client/pages/home/style/home.style.css"
});
