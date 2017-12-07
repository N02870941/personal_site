(function() {
  try {
    angular.module('app').service('sendEmailService', function() {

      function sendEmail(email) {
        console.log("Sending email");
        console.log(email);
      }

      return {
        sendEmail : sendEmail
      }

    });

  } catch (err) {
    console.error(err);
  }
})();
