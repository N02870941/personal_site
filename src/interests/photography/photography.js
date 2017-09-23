app.controller('photographyController', function($scope) {

  $scope.images = [
    {
      src: "src/interests/photography/img/fireworks.jpg",
      cap: "Fireworks"
    },
    {
      src: "src/interests/photography/img/ceazar2.jpg",
      cap: "My dog!"
    },
    {
      src: "src/interests/photography/img/empire_state_building.jpg",
      cap: "Empire State Building on Pride Day"
    },
    {
      src: "src/interests/photography/img/ceazar3.jpg",
      cap: "Ceazar again"
    },
    {
      src: "src/interests/photography/img/jalia_graduation.jpg",
      cap: "Jalia graduating"
    },
    {
      src: "src/interests/photography/img/bug.jpg",
      cap: "A bug I found in my drawer"
    },
    {
      src: "src/interests/photography/img/ceazar1.jpg",
      cap: "My puppy :)"
    },
    {
      src: "src/interests/photography/img/moon.jpg",
      cap: "Blood Moon"
    }
  ];


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

});
