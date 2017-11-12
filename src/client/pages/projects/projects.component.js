app.component('myProjects', {

  controller: function() {
    this.title = "Projects";

    this.description = "Below you will find links to some of the projects" +
                         "and experiences that I have done outside of class";

    this.projects = [
      {
        title: "Being Black and Getting Your Foot in the Door",
        name: 'mlt',
        href:'#!/projects/mlt#top',
        img: "/client/pages/projects/img/thumbnail/mlt.jpg",
        brief: "A collaboration with Kadeen Douglas and Dr. Cruz Caridad Bueno of " +
               "the Black Studies Department at SUNY New Paltz to assist students of " +
               "color kickstart their professional development"
      },
      {
        title: "Two Summer Internships at Target",
        name: 'target',
        href:'#!/projects/target#top',
        img: "/client/pages/projects/img/thumbnail/target.png",
        brief: "Get a peek as to how I spent some of my summers at Target"
      }
    ];

  },

  template: `
    <project-list title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});
