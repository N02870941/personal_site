(function() {
  try {
    angular.module('contact').component('jdContact', {

      bindings: {
        title: "@"
      },

      controller: function($mdDialog) {
        this.class = "grow fa fa-5x ";
        this.methodsOfContact = config.methodsOfContact;

        this.showDialog = function() {

          $mdDialog.show({
              template : "<jd-send-email></jd-send-email>",
              clickOutsideToClose: true,
              escapeToClose: true
          });

        }
      },

      templateUrl: "client/modules/contact/contact.template.html"
    });

  } catch (err) {
    console.error(err);
  }

})();
