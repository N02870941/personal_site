app.component('myResume', {

  template: `
    <my-pdf-or-jpg
      pdf="client/pages/resume/img/resume.pdf#!page=1"
      jpg="/client/pages/resume/img/resume.png"
    </my-pdf-or-jpg>
  `
});
