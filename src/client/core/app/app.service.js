app.factory("app", function() {

  /**
   * Dynamically choose to display the PDF version or PNG verion
   */
  function pdfOrJpg(pdfURL, jpgUrl) {

    const mq = window.matchMedia( "(min-width: 600px)" );

    // PDF
    if (mq.matches == true) {
      return pdfURL;

    // JPG
    } else {

      return jpgUrl;
    }
  }

  return {
    pdfOrJpg: pdfOrJpg
  }

});
