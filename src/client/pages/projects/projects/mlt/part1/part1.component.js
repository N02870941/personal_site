app.component('jdPart1', {

  css: "client/pages/projects/projects/mlt/part1/part1.css",

  templateUrl: "/client/pages/projects/projects/mlt/part1/part1.template.html",

  controller: function() {
    // TO CONVERT PPTX TO PDF AND PRESERVE HYPER LINKS:
    // https://smallpdf.com/ppt-to-pdf

    this.jabari_resumes = [
      {
        name: "Freshman Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_freshman_year.pdf'
      },
      {
        name: "Sophomore Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_sophomore_year.pdf'
      },
      {
        name: "Junior Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_junior_year.pdf'
      },
      {
        name: "Senior Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_senior_year.pdf'
      }
    ];

    this.kadeen_resumes = [
      {
        name: "Sophomore Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_sophomore_year.pdf'
      },
      {
        name: "Junior Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_junior_year.pdf'
      },
      {
        name: "Senior Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_senior_year.pdf'
      }
    ];

    this.$onInit = function() {

    }
  }

});
