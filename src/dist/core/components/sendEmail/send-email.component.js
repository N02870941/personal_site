(function() {
  try {
    angular.module('app').component('jdSendEmail', {

      bindings : {
        sendto : "@"
      },

      css: "client/core/components/sendEmail/send-email.style.css",
      templateUrl : "client/core/components/sendEmail/send-email.template.html",

      controller: function(sendEmailService, $mdDialog) {

        this.email = {
          name    : "",
          email   : "",
          subject : "",
          message : ""
        }

        // Sends an email to owner of website (me!)
        this.send = function(userForm) {

          if (userForm.$valid) {

            // Submit the form, perhaps alert in the
            // callback so we can determine whether it
            // was a success or a failure
            sendEmailService.sendEmail(this.email);

            // Show popup saying thanks
            alert = $mdDialog.alert({
              title: 'Message Sent!',
              textContent: 'Thanks for reaching out, and I\'ll get back to you soon!',
              ok: 'Close'
            });

            $mdDialog.show(alert).finally(function() {
              alert = undefined;
            });

            $mdDialog.cancel();
          }

        }

      }

    })


  } catch (err) {
    console.error(err);
  }
})();
