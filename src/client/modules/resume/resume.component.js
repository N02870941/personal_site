(function() {
  try {
    angular.module(config.app.name).component('jdResume', {

      templateUrl: "client/modules/resume/resume.template.html"
    });

  } catch (err) {
    console.error(err);
  }

})();
