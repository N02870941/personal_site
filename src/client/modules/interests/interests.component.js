(function() {
  try {
    angular.module('interests').component('jdInterests', {

      bindings: {
        title: "@"
      },

      templateUrl: "client/modules/interests/interests.template.html",

      controller: function() {
        this.description = "Below you can find links to some of my hobbies and things that make me who I am."

        this.projects = [
          {
            title: "Travel",
            name: 'travel',
            sref: 'travel',
            img: "/client/modules/interests/travel/img/thumbnail/travel.jpg",
            brief: "Check out some of my most recent national and international journies!"
          },
          {
            title: "Photography",
            name: 'photography',
            sref: 'photography',
            img: "/client/modules/interests/photography/img/thumbnail/photography.jpg",
            brief: "See some of my favorite photos that I have taken!"
          },
          {
            title: "Fitness",
            name: 'fitness',
            sref: 'fitness',
            img: "/client/modules/interests/fitness/img/thumbnail/fitness.jpg",
            brief: "Here are some of my thoughts on fitness and the role it has played in my life."
          },
          {
            title: "Culture",
            name: 'culture',
            sref: 'culture',
            img: "/client/modules/interests/culture/img/thumbnail/culture.jpg",
            brief: "Follow my hair journey and other cultural experiences."
          }
        ];
      }

    });


  } catch (err) {
    console.error(err);
  }

})();
