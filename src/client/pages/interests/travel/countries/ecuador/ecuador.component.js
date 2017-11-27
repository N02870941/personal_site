app.component('myEcuador', {

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

  templateUrl: "client/pages/interests/travel/countries/ecuador/templates/ecuador.template.html"

});