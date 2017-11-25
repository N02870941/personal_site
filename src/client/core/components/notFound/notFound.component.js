app.component('myNotFound', {

  controller: function($location) {

    var protocol = $location.protocol();
    var host = $location.host();
    var port = $location.port();
    this.redirectUrl = protocol + "://" + host + ":" + port + "/#!/home";

    this.message = "";
  },

  template: `
  <my-count-down-redirect
    title='Page Not Found'
    message='{{$ctrl.message}}'
    redirect='{{$ctrl.redirectUrl}}'
    time=5
  >
  </my-count-down-redirect>
  `

});
