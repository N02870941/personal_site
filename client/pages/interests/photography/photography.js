client.controller('photographyController', function($scope, $http, preloader, photographyService) {

  /**
   *
   */
  $scope.showAllText = function(id) {
    var a = document.getElementById(id);

    // Flip the text based off of the current state
    if (a.innerHTML == 'Read more...') {
      a.innerHTML = 'Show less...';

    } else {
      a.innerHTML = 'Read more...';
    }

    $scope.showAll = !$scope.showAll;
  }

//------------------------------------------------------------------------------

  $scope.setupModal = function(imgID) {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imgID);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // If the user clicks escape
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { // escape key maps to keycode `27`
        modal.style.display = "none";
      }
    });
  }

//------------------------------------------------------------------------------

  $scope.showAll = false;
  $scope.images = [];

  photographyService.getPhotoPaths().
    then(function(data) {

      $scope.images = data;
  });

});
