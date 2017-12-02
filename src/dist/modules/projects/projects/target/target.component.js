(function() {
  try {
    angular.module('projects').component('jdTarget', {

      controller: function() {
        this.title = "Two Summer Internships at Target";

        this.description = `
          Throughout my college career, I have intered twice at Target Corporation
          as a Software Engineer. Below you can find out more about my experience
          with Target!
        `;

        this.projects = [
          {
            title: "Summer 2016",
            name: 'summer2016',
            href:'#!/projects/target/2016/2016',
            img: "/client/modules/projects/projects/target/img/thumbnail/target.png",
            brief: `
              My first summer at Target in 2016.
            `
          },
          {
            title: "Summer 2017",
            name: 'summer2017',
            href:'#!/projects/target/2017/2017',
            img: "/client/modules/projects/projects/target/img/thumbnail/target.png",
            brief: `
              My second summer at Target in 2017.
            `
          },
        ];

      },

      template: `
        <jd-project-list title='{{$ctrl.title}}'
          description="{{$ctrl.description}}"
          links="$ctrl.projects">
        </jd-project-list>
      `
    });

  } catch (err) {
    console.error(err);
  }


})();
