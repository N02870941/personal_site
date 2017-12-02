(function() {
  try {
    angular.module('interests').component('jdEcuador', {

      controller: function() {

        this.toggleLanguage = function() {
          this.spanish = !this.spanish;

          if (this.spanish) {
            $("#toggle-button").html('View in English');

          } else {

            $("#toggle-button").html('Ver en Español');
          }
        }

      //------------------------------------------------------------------------------

        this.$onInit = function() {
          this.spanish = true;
          this.toggleLanguage();
        }

      },

      templateUrl: "client/modules/interests/travel/countries/ecuador/ecuador.template.html"

    });

  } catch (err) {
    console.error(err);
  }


})();
