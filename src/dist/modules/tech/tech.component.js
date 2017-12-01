(function() {
  angular.module('app').component('jdTech', {

    controller: function() {
      this.title = "Tech Projects";

      this.description = `
         I am relatively new to developing personal projects - this website being one of them.
         But below, I have listed a couple of links to projects that I have worked on and
         a small write-up as to what skills I developed and things that I learned from each given project.
      `;

      this.projects = [
        {
          title: "Discrete and Continuous Algorithms and Data Structures",
          name: "algorithms",
          href:'#!/tech/algorithms',
          img: "/client/modules/tech/img/thumbnail/algorithms.png",
          brief: "C++ Implementation of common data structures and associate algorithms and interview questions"
        },
        {
          title: "Linear and Nonlinear Regression",
          name: "regression",
          href:'#!/tech/regression',
          img: "/client/modules/tech/img/thumbnail/regression.png",
          brief: "Basic Python UI that provided a data set displays best fit functions"
        },
        {
          title: "Temperature Collection at SUNY New Paltz",
          name: "temperature",
          href:'#!/tech/temperature',
          img: "/client/modules/tech/img/thumbnail/temperature.jpg",
          brief: "Distributed Raspberry Pi based project where we collected temperature data and visualized on a website"
        },
        {
          title: "My Personal Website",
          name: "website",
          href:'#!/tech/website',
          img: "/client/modules/tech/img/thumbnail/website.jpg",
          brief: "This website was completely written by me!"
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
