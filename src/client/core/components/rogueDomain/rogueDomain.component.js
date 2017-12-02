(function() {
  try {
    angular.module('app').component('jdRogueDomain', {

      controller: function($location, site) {

        this.redirectUrl = "http://" + site.domain;

        this.message = $location.host() + ` is not the proper domain for this website.
          It is a rogue domain, which means that it is a domain pointing to the server
          for` + domain;
      },

      template: `
      <jd-count-down-redirect
        title='Rogue Domain'
        message='{{$ctrl.message}}'
        redirect='{{$ctrl.redirectUrl}}'
        time=5
      >
      </jd-count-down-redirect>
      `

    });

  } catch (err) {
    console.error(err);
  }

})();
