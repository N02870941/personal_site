app.component('rogueDomain', {

  controller: function($location, domain) {

    this.redirectUrl = "http://" + domain;

    this.message = $location.host() + ` is not the proper domain for this website.
      It is a rogue domain, which means that it is a domain pointing to the server
      for` + domain;
  },

  template: `
  <my-count-down-redirect
    title='Rogue Domain'
    message='{{$ctrl.message}}'
    redirect='{{$ctrl.redirectUrl}}'
    time=5
  >
  </my-count-down-redirect>
  `

});
