(function() {
  try {
    angular.module('contact').component('jdContactMethod', {

      bindings: {
        href: "@",
        target: "@",
        myclass: "@",
        text: "@",
      },

      templateUrl: "client/modules/contact/components/contact-method.template.html"

    });

  } catch (err) {
    console.error(err);
  }

})();
