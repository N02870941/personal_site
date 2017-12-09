(function() {
  try {
    angular.module(config.app.name).component("jdWebsite", {

      template: "<jd-coming-soon></jd-coming-soon>"
    });

  } catch (err) {
    console.error(err);
  }

})();
