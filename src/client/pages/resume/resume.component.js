app.component('myResume', {

  template: '<div ng-include="$ctrl.templateUrl">',

  controller: function() {

    /**
     * Dynamically choose to display the PDF version or PNG verion
     */
    this.$onInit = function() {

      const mq = window.matchMedia( "(min-width: 600px)" );

      // PDF
      if (mq.matches == true) {
        this.templateUrl = "client/pages/resume/templates/resume-pdf.template.html";

      // JPG
      } else {

        this.templateUrl = "client/pages/resume/templates/resume-jpg.template.html";
      }
    }
  }
});
