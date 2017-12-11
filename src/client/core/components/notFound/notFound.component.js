(function() {
  try {
    angular.module(config.app.name).component('jdNotFound', {

      controller: function($location) {
        var protocol = $location.protocol();
        var host = $location.host();
        var port = $location.port();
        this.redirectUrl = protocol + "://" + host + ":" + port + "/#!/home";

        this.message = "";
      },

      templateUrl: "client/core/components/notFound/notFound.template.html"
    });

  } catch (err) {
    console.error(err);
  }

})();
