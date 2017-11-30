app.component('jdPdfOrJpg', {

  bindings: {
    pdf: "@",
    jpg: "@",
  },

  css: "client/core/components/pdfOrJpg/pdfOrJpg.css",

  controller: function() {

    this.pdfTemplateUrl = "client/core/components/pdfOrJpg/templates/pdf.template.html";
    this.jpgTemplateUrl = "client/core/components/pdfOrJpg/templates/jpg.template.html";

    this.$onInit = function() {

      /**
       * Dynamically choose to display the PDF version or PNG verion
       */
      //  TODO - see if we cab get 600px from $mobile in variables??
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
