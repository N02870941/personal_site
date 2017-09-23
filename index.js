/**
 * @desc Loads the templates and assigns them ids via JQuery
 */
var load_templates = function() {

  // Load header, footer, and home page by default
  $("#header").load("src/header/header.html");
  $("#footer").load("src/footer/footer.html");

  var location = navegate_to(window.location.hash);

  $("#body").load("src/home/home.html");
};

//------------------------------------------------------------------------------

function navegate_to(name) {
  var url = "src/";

  window.location.hash = name;

  switch (name) {
    case "home":
      url = url + "home/home";
      break;

    case "biography":
      url = url + "biography/biography";
      break;

    case "resume":
      url = url + "resume/resume";
      break;

    case "projects":
      url = url + "projects/projects";
      break;

    case "fitness":
      url = url + "interests/fitness/fitness";
      break;

    case "hair":
      url = url + "interests/hair/hair";
      break;

    case "photography":
      url = url + "interests/photography/photography";
      break;

    case "travel":
      url = url + "interests/travel/travel";
      break;

    case "contact":
      url = url + "contact/contact";
      break;

    default:
      url = url + "home/home";
      break;
  }

  url = url + ".html";

  console.log(url);

  console.log(window.location.hash);

  $("#body").load(url);

}
