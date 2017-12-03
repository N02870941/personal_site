(function() {

  try {
    angular.module('biography').component('jdBiography', {

      bindings: {
        title: "@"
      },

      templateUrl: "client/modules/biography/biography.template.html"
    });

  } catch (err) {

    console.error(err);
  }

})();
