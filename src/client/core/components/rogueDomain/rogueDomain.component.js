(function() {
  try {
    angular.module(config.app.name).component('jdRogueDomain', {

      controller: function($location, site) {

        this.redirectUrl = "http://" + config.site.domain;
        this.message = $location.host() + " is not the proper domain for this website. It is a rogue domain, which means that it is a domain pointing to the server for " + domain;
      },

      templateUrl: "client/core/components/rogueDomain/rogueDomain.template.html"

    });

  } catch (err) {
    console.error(err);
  }

})();
