app.controller('mltController', function($scope) {

  $scope.seminars = [
    {
      name: "Part 1: Informational",
      href:'#!/projects/mlt/part1#top',
      img: "/client/pages/projects/img/thumbnail/mlt.jpg",
      brief: "The first of our series is an informational in which we " +
             "introduce students to the MLT Career Prep Program (CP), speak about our experiences " +
             "in the CP, and give an overview on how to apply."
    },
    {
      name: "Part 2: Resume Writing Workshop",
      href:'#!/projects/mlt/part2#top',
      img: "/client/pages/projects/img/thumbnail/mlt.jpg",
      brief: "The second in the series is a resume writing workshop where " +
             "students will work with professionals to strengthen their resumes and short essays " +
             "for their MLT applications."
    },
    {
      name: "Part 3: Keys to Success Panel",
      href:'#!/projects/mlt/part3#top',
      img: "/client/pages/projects/img/thumbnail/mlt.jpg",
      brief: "In part 3 there will be a panel discussion where professionals will speak to students " +
             "about some of the keys to success in the working world."
    },
    {
      name: "Part 4: Wrap up",
      href:'#!/projects/mlt/part4#top',
      img: "/client/pages/projects/img/thumbnail/mlt.jpg",
      brief: "We will close our series with a session in which students will have the opportunity " +
             "to meet with professionals to make finishing touches to their MLT Career Prep applications."
    }
  ];
});
