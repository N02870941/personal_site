(function() {
  angular.module('app').component('jdInterests', {

    bindings: {
      title: "@"
    },

    controller: function() {
      this.description = `
        Below you can find links to some of my hobbies and things that make me who I am.
      `

      this.projects = [
        {
          title: "Travel",
          name: 'travel',
          href:'#!/interests/travel',
          img: "/client/modules/interests/travel/img/thumbnail/travel.jpg",
          brief: "Check out some of my most recent national and international journies!"
        },
        {
          title: "Photography",
          name: 'photography',
          href:'#!/interests/photography',
          img: "/client/modules/interests/photography/img/thumbnail/photography.jpg",
          brief: "See some of my favorite photos that I have taken!"
        },
        {
          title: "Fitness",
          name: 'fitness',
          href:'#!/interests/fitness',
          img: "/client/modules/interests/fitness/img/thumbnail/fitness.jpg",
          brief: "Here are some of my thoughts on fitness and the role it has played in my life."
        },
        {
          title: "Culture",
          name: 'culture',
          href:'#!/interests/culture',
          img: "/client/modules/interests/culture/img/thumbnail/culture.jpg",
          brief: "Follow my hair journey and other cultural experiences."
        }
      ];
    },

    template: `
      <jd-project-list
        title='{{$ctrl.title}}'
        description="{{$ctrl.description}}"
        links="$ctrl.projects">
      </jd-project-list>
    `
  });

})();
