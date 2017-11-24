app.component('myNotFound', {

  template: `
    <h1>Page Not Found</h1>

    <p>You should be automatically redirected in <span id="seconds">5</span> seconds.
    </p>
  `
  ,

  controller: function($location, $window) {
    var seconds = 5; // seconds for HTML
    var foo; // variable for clearInterval() function

    function redirect() {
      var protocol = $location.protocol();
      var host = $location.host();
      var port = $location.port();

      var url = protocol + "://" + host + ":" + port + "/#!/home";

      $window.location.href = url;
    }

    function updateSecs() {
      document.getElementById("seconds").innerHTML = seconds;
      seconds--;
      if (seconds == -1) {
        clearInterval(foo);
        redirect();
      }
    }

    function countdownTimer() {
      foo = setInterval(function () {
        updateSecs()
      }, 1000);
    }

    countdownTimer();
  }

});
