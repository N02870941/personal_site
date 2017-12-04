(function() {
  try {
    angular.module(config.app.name).component('jdResume', {

      template: `
        <jd-pdf-or-jpg
          pdf="client/modules/resume/img/resume.pdf#!page=1"
          jpg="/client/modules/resume/img/resume.png"
        </jd-pdf-or-jpg>
      `
    });

  } catch (err) {
    console.error(err);
  }

})();
