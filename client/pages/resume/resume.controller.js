app.controller('resumeController', function($scope) {

  /**
   * Figure out whether to display the PDF version or PNG verion
   */
  function pdfOrImg() {
    const mq = window.matchMedia( "(min-width: 600px)" );

    $scope.showPDF = mq.matches == true ? true : false;
  }

//------------------------------------------------------------------------------

  $scope.showPDF = true;

  pdfOrImg();
});
