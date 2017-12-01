(function() {
  angular.module('app').component("jdModal", {

    bindings: {
      images: "<",
    },

    css: "client/core/components/modal/modal.css",

    controllerAs: "vm",

    controller: function() {

      var vm = this;

      this.setupModal = function(imgID) {
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById(imgID);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            // captionText.innerHTML = this.alt;
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
    },

    template: `
      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
      </div>

      <section id="photos">

        <div ng-repeat="img in vm.images">

          <img id={{img}} class="grey-out" ng-src="{{img}}" alt="">
          {{vm.setupModal(img)}}
        </div>

      </section>
    `
  });

})();
