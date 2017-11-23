app.component('myPdfOrJpg', {

  bindings: {
    pdf: "@",
    jpg: "@",
  },

  controller: function(app) {

    this.pdfTemplateUrl = "client/core/components/pdfOrJpg/templates/pdf.template.html";
    this.jpgTemplateUrl = "client/core/components/pdfOrJpg/templates/jpg.template.html";

    this.$onInit = function() {

      /**
       * Dynamically choose to display the PDF version or PNG verion
       */
      if (window.matchMedia( "(min-width: 600px)" ).matches) {

        this.templateUrl = this.pdfTemplateUrl;
        this.src = this.pdf;

      } else {

        this.templateUrl = this.jpgTemplateUrl;
        this.src = this.jpg;
      }
    }
  },

  template: '<div ng-include="$ctrl.templateUrl">',
});