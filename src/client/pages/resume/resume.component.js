app.component('myResume', {
  
  template: `
    <my-pdf-or-jpg
      pdf="client/pages/resume/templates/resume-pdf.template.html";
      jpg="client/pages/resume/templates/resume-jpg.template.html";
    </my-pdf-or-jpg>
  `
});
