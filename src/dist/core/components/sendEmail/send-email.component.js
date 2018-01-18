(function() {
  try {
    angular.module('app').component('jdSendEmail', {

      css: "client/core/components/sendEmail/send-email.style.css",
      templateUrl : "client/core/components/sendEmail/send-email.template.html",

      controller: function(sendEmailService, $mdDialog) {

        // Field that are two way
        // binded to the form
        this.email = {
          name    : "",
          email   : "",
          subject : "",
          message : ""
        }

        // Sends an email to owner of website (me!)
        this.send = function(userForm) {
          if (userForm.$valid) {

            // Send the email
            sendEmailService.sendEmail(this.email).then(function(res) {

              // Show success dialog
              $mdDialog.show(
                $mdDialog.alert({
                  title: 'Message Sent!',
                  textContent: 'Thanks for reaching out, and I\'ll get back to you soon!',
                  ok: 'Close'
                }))
                .finally(function() {
                alert = undefined;
              });

            }).catch(function(res) {

              // Show error dialog
              $mdDialog.show(
                $mdDialog.alert({
                  title: 'Error!',
                  textContent: 'Message was not sent, please try again',
                  ok: 'Close'
                }))
                .finally(function() {
                alert = undefined;
              });

            });

            // Close the main $mdDialog
            // $mdDialog.cancel();
          }

        }
      }
    })

  } catch (err) {
    console.error(err);
  }
})();
