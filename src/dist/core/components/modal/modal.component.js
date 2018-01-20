(function() {
  try {
    angular.module(config.app.name).component("jdModal", {

      bindings: {
        images: "<",
      },

      templateUrl : 'client/core/components/modal/modal.template.html',
      css: "client/core/components/modal/modal.css",
      controllerAs: "vm",

      controller: function($window) {
        var vm = this;
        var modalImgIndex = 0;
        var modalImgId = 'modalImg';
        var modalId = 'myModal';

// These functions are meant to be called only within the controller
//------------------------------------------------------------------------------

        /**
         * Updates the photo that in the modal via index
         *
         * @param index The index of the photo that will
         * be inserted into th modal
         */
        function updateModalImg(index) {
          document.getElementById(modalImgId).src = vm.images[index];
        }

//------------------------------------------------------------------------------

        // TODO - Get rid of these functions because
        // they set up global key listeners that still
        // exist when the app is in other states / pages
        // Destroy them in $onDestroy() lifecycle hook
        function setupNextPrevArrowButtons() {
          $(document).keyup(function(e) {
            if (e.keyCode == 37) { // left arrow key maps to keycode `37`
              vm.previous();
            }
          });

          $(document).keyup(function(e) {
            if (e.keyCode == 39) { // right arrow key maps to keycode `39`
              vm.next();
            }
          });
        }

//------------------------------------------------------------------------------

        function setupKeyListener(keycode, action) {
          $(document).keyup(function(e) {
            if (e.keyCode == keycode) { // escape key maps to keycode `27`
              action();
            }
          });
        }

//------------------------------------------------------------------------------

        /**
         * @description Returns the HTML for an img
         * @param imgID The designated image id
         */
        function getImageDiv(imgID) {
          var html = "" +
            "<img " +
              "onclick='imgOnClick(this.id)' " +
              "id='" + imgID + "' " +
              "class='grey-out' " +
              "src='" + imgID + "'>"

          return html;
        }

//------------------------------------------------------------------------------

        /**
         * @description Navigates to the previous
         * photo in the photo modal slideshow
         */
        vm.previous = function() {
          modalImgIndex--;

          if (modalImgIndex < 0) {
            modalImgIndex = this.images.length-1;
          }

          updateModalImg(modalImgIndex);
        }

//------------------------------------------------------------------------------

        /**
         * @description Navigates to the next photo in
         * the photo modal slideshow
         */
        vm.next = function() {
          modalImgIndex++;

          if (modalImgIndex >= this.images.length) {
            modalImgIndex = 0;
          }

          updateModalImg(modalImgIndex);
        }

//------------------------------------------------------------------------------

        /**
         * @description Action that gets executed when an image is clicked
         * on from the main section. The image that is clicked on is assigned
         * to the modalImg, and the modal opens the image in a larger view
         *
         * @param imgID The id of the img that was clicked on
         */
        vm.imgOnClick = function(imgId) {
          var img      = document.getElementById(imgId);
          var modalImg = document.getElementById(modalImgId);
          var modal    = document.getElementById(modalId);

          modal.style.display = "block";
          modalImg.src = img.src;
        }

        // Expose function to JavaScript scope,
        // Not sure why ng-click does not work
        // with vm.imgOnClick()
        imgOnClick = vm.imgOnClick;

//------------------------------------------------------------------------------

        /**
         * @description Closes the modal view
         */
        vm.closeModal = function() {
          document.getElementById(modalId).style.display = "none";
        }

//------------------------------------------------------------------------------

        /**
         * Sets up the modal when the component is initialized
         */
        vm.$onInit = function() {

          // TODO - figure out why the array
          // is empty when this state is loaded
          // from another state
          if (this.images.length == 0) {
            $window.location.reload();
          }

          var photos = document.getElementById('photos');

          setupKeyListener(27, vm.closeModal);
          setupNextPrevArrowButtons();

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
