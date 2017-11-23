app.component('myTech', {

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
        href:'#!/tech/algorithms#top',
        img: "/client/pages/tech/img/thumbnail/algorithms.png",
        brief: "C++ Implementation of common data structures and associate algorithms and interview questions"
      },
      {
        title: "Linear and Nonlinear Regression",
        name: "regression",
        href:'#!/tech/regression#top',
        img: "/client/pages/tech/img/thumbnail/regression.png",
        brief: "Basic Python UI that provided a data set displays best fit functions"
      },
      {
        title: "Temperature Collection at SUNY New Paltz",
        name: "temperature",
        href:'#!/tech/temperature#top',
        img: "/client/pages/tech/img/thumbnail/temperature.jpg",
        brief: "Distributed Raspberry Pi based project where we collected temperature data and visualized on a website"
      },
      {
        title: "My Personal Website",
        name: "website",
        href:'#!/tech/website#top',
        img: "/client/pages/tech/img/thumbnail/website.jpg",
        brief: "This website was completely written by me!"
      }
    ];

  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});