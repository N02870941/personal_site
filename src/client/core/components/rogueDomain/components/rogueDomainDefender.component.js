app.component('rogueDomainDefender', {

  controller: function($location, $window) {

    function redirect() {
      var protocol = $location.protocol();
      var host = $location.host();
      var port = $location.port();

      var url = protocol + "://" + host + ":" + port + "/#!/rogueDomain";

      $window.location.href = url;
    }

    this.$onInit = function() {

      var host = $location.host();

      if (host != "localhost" && host != "jabaridash") {

        console.log("not the right domain");
        redirect();

      } else {
        console.log("welcome");
      }
    }

  }

});
