/**
 * Custom directive to insert the header into the index.html
 * so that it always stays at the top
 */
app.directive('header', function() {
  return {
    templateUrl: 'client/core/directives/header/header.html'
  };
})
