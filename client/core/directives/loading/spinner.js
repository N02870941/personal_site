app.directive('imageonload', function() {
    return {
        restrict: 'A',

        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});


/*
<!-- How to use this directive -->
<!-- <img id={{img}} class="modal-img spinner " ng-src="{{img}}" alt="" imageonLoad>
<span class="loading"> <img src="https://media.giphy.com/media/210NUQw5BT8c0/source.gif"/></span>
{{setupModal(img)}} -->
*/
