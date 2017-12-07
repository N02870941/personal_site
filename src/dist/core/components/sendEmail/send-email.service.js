(function() {
  try {
    angular.module('app').service('sendEmailService', function($http) {

      function sendEmail(email) {
        var url = "/contact";

        return $http.post(url, email, {}).then(function(res) {

          return res.data;
        });
      }

      return {
        sendEmail : sendEmail
      }

    });

  } catch (err) {
    console.error(err);
  }
})();
