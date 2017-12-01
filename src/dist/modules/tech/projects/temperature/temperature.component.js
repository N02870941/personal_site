(function() {
  angular.module('app').component('jdTemperature', {

    template: `
      <jd-pdf-or-jpg
        pdf="client/modules/tech/projects/temperature/img/temperature.pdf#!page=1"
        jpg="client/modules/tech/projects/temperature/img/temperature.jpg">
      </jd-pdf-or-jpg>
    `
  });
})();
