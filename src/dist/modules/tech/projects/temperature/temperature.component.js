(function() {
  try {
    angular.module(config.app.name).component('jdTemperature', {

      templateUrl: "client/modules/tech/projects/temperature/temperature.template.html"

    });

  } catch (err) {
    console.error(err);
  }

})();
