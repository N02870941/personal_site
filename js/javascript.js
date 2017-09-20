/**
 * @desc Loads the templates and assigns them ids via JQuery
 */
var load_templates = function() {

  // Load header, footer, and home page by default
  $("#header").load("html/header.html");
  $("#body").load("html/home.html");
  $("#footer").load("html/footer.html");
};

//------------------------------------------------------------------------------

/**
 * @desc Effectively changes the inner html without changing the full page
 * @param location Which template page to navegate to
 */
function navegate_to(location) {

  // Reuse the id "body" for the current template that is showing
  $("#body").load("html/" + location + ".html");
}
