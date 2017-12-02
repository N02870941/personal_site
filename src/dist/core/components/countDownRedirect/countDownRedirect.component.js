(function() {
  try {
    angular.module('app').component('jdCountDownRedirect', {

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
      `,

      controller: function($location, $window, $state) {

        var vm = this;

        var seconds = 5; // seconds for HTML
        var foo; // variable for clearInterval() function

        this.$onInit = function() {
          seconds = this.time;
        }

        vm.updateSecs = function() {
          document.getElementById("seconds").innerHTML = seconds;
          seconds--;
          if (seconds == -1) {
            clearInterval(foo);
            $state.go('home');
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

  } catch (err) {
    console.error(err);
  }


})();
