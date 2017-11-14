app.component('myMlt', {

  controller: function() {
    this.title = "Being Black and Getting Your Foot in the Door";

    this.description = `
      Being Black and Getting Your Foot in the Door is a four part series dedicated
      to the professional advancement of students of color at SUNY New Paltz. On this
      project I am working with Dr. Cruz Caridad Bueno and Kadeen Douglas to help
      students develop their resumes, apply to programs such as MLT Career Prep, and
      take charge of their professional lives.
    `;

    this.projects = [
      {
       title: "Part 1: Informational",
       name: "part1",
       href:'#!/projects/mlt/part1#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "The first of our series is an informational in which we " +
              "introduce students to the MLT Career Prep Program (CP), speak about our experiences " +
              "in the CP, and give an overview on how to apply."
      },
      {
       title: "Part 2: Resume Writing Workshop",
       name: "part2",
       href:'#!/projects/mlt/part2#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "The second in the series is a resume writing workshop where " +
              "students will work with professionals to strengthen their resumes and short essays " +
              "for their MLT applications."
      },
      {
       title: "Part 3: Keys to Success Panel",
       name: "part3",
       href:'#!/projects/mlt/part3#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "In part 3 there will be a panel discussion where professionals will speak to students " +
              "about some of the keys to success in the working world."
      },
      {
       title: "Part 4: Wrap up",
       name: "part4",
       href:'#!/projects/mlt/part4#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "We will close our series with a session in which students will have the opportunity " +
              "to meet with professionals to make finishing touches to their MLT Career Prep applications."
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
