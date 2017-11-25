app.component('myCountDownRedirect', {

  bindings: {
    title: "@",
    message: "@",
    time: "@",
    redirect: '@',
  },

  template: `
    <h1>{{$ctrl.title}}</h1>

    <p>{{$ctrl.message}}</p>

    <p>You should be automatically redirected in <span id="seconds"></span> seconds.</p>
  `
  ,

  controller: function($location, $window) {

    var vm = this;

    var seconds = 5; // seconds for HTML
    var foo; // variable for clearInterval() function

    this.$onInit = function() {
      seconds = this.time;
      console.log(this.redirect);

    }

    vm.reroute = function() {
      var protocol = $location.protocol();
      var host = $location.host();
      var port = $location.port();

      var url = protocol + "://" + host + ":" + port + "/#!/home";

      $window.location.href = this.redirect;
    }

    vm.updateSecs = function() {
      document.getElementById("seconds").innerHTML = seconds;
      seconds--;
      if (seconds == -1) {
        clearInterval(foo);
        vm.reroute();
      }
    }

    vm.countdownTimer = function() {
      foo = setInterval(function () {
        vm.updateSecs()
      }, 1000);
    }

    vm.countdownTimer();
  }

});
