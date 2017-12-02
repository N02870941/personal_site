(function() {

  // Make sure that the module exists
  // TODO - do this for everything
  try {
    angular.module('biography').component('jdBiography', {

      bindings: {
        title: "@"
      },

      templateUrl: "client/modules/biography/biography.template.html"
    });

    // TODO - Figure out what to do if the
    // module has not being initialized
  } catch (err) {

    console.error(err);
  }

})();
