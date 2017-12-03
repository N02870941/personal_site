(function() {
  try {
    angular.module('app').component("jdModal", {

      bindings: {
        images: "<",
      },

      templateUrl : 'client/core/components/modal/modal.template.html',
      css: "client/core/components/modal/modal.css",
      controllerAs: "vm",

      controller: function($location) {
        var vm = this;
        var modalImgIndex = 0;
        var modalImgId = 'img01';
        var modalId = 'myModal';

//------------------------------------------------------------------------------

        function updateModalImg(index) {
          document.getElementById(modalImgId).src = vm.images[index];
        }

//------------------------------------------------------------------------------

        this.previous = function() {
          modalImgIndex--;

          if (modalImgIndex < 0) {
            modalImgIndex = this.images.length-1;
          }

          updateModalImg(modalImgIndex);
        }

//------------------------------------------------------------------------------

        this.next = function() {
          modalImgIndex++;

          if (modalImgIndex >= this.images.length) {
            modalImgIndex = 0;
          }

          updateModalImg(modalImgIndex);
        }

//------------------------------------------------------------------------------

        imgOnClick = function(imgId) {
          var img = document.getElementById(imgId);
          var modal = document.getElementById(modalId);
          var modalImg = document.getElementById(modalImgId);

          modal.style.display = "block";
          modalImg.src = img.src;
        }

//------------------------------------------------------------------------------

        function setupCloseButton(modal) {
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }
        }

//------------------------------------------------------------------------------

        function setupCloseOnEscape(modal) {
          // If the user clicks escape
          $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
              modal.style.display = "none";
            }
          });
        }

//------------------------------------------------------------------------------

        function getImageDiv(imgID) {
          return `
            <div>
              <img onclick='imgOnClick(this.id)'
                   id="`+ imgID + `"
                   class="grey-out"
                   src="` + imgID + `">
            </div>
          `
        }

//------------------------------------------------------------------------------

        this.$onInit = function() {
          var photos = document.getElementById('photos');
          var modal = document.getElementById('myModal');

          setupCloseButton(modal);
          setupCloseOnEscape(modal);

          // Create the HTML for each image
          for (var i in this.images) {
            photos.innerHTML = photos.innerHTML + getImageDiv(this.images[i]);
          }
        }

      }

    });

  } catch (err) {
    console.error(err);
  }

})();
