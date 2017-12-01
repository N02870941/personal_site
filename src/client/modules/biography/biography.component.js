(function() {
  angular.module('biography').component('jdBiography', {

    bindings: {
      title: "@"
    },

    templateUrl: "client/modules/biography/biography.template.html"
  });
})();
