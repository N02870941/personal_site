app.component('target', {

  controller: function() {
    this.title = "Two Summer Internships at Target";

    this.description = "";

    this.projects = [
      {
        title: "Summer 2016",
        name: 'summer2016',
        href:'#!/projects/target/2016/2016#top',
        img: "/client/pages/projects/projects/target/img/thumbnail/target.png",
        brief: `
          My first summer at Target in 2016.
        `
      },
      {
        title: "Summer 2017",
        name: 'summer2017',
        href:'#!/projects/target/2017/2017#top',
        img: "/client/pages/projects/projects/target/img/thumbnail/target.png",
        brief: `
          My second summer at Target in 2017.
        `
      },
    ];

  },

  template: `
    <project-list title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});
