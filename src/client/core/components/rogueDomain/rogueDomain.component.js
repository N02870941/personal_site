app.component('rogueDomain', {

  controller: function($location) {

    this.redirectUrl = "http://jabaridash.com";

    this.message = $location.host() + ` is not the proper domain for this website.
      It is a rogue domain, which means that it is a domain pointing to the server
      for jabaridash.com`;
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
