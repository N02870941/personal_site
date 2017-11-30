// Set  up routing for whole site
app.config(function ($routeProvider) {

  // TODO - Dynamically create states
  // for main pages (home, bio, etc)
  // Then manually route for sub-pages
  // TODO Remember to 'normalise' css so
  // it looks the same on each browser
  $routeProvider
    .when('/', {
      template: "<jd-home></jd-home>"
    })

    .when('/home', {
      template: "<jd-home></jd-home>"
    })

    .when('/biography', {
      template: "<jd-biography><jd-biography>"
    })

    .when('/resume', {
      template: "<jd-resume><jd-resume>"
    })

    .when('/projects', {
      template: "<jd-projects></jd-projects>"
    })

    .when('/tech', {
      template: "<jd-tech></jd-tech>"
    })

    .when('/projects/target', {
      template: "<jd-target></jd-target>"
    })

    .when('/projects/target/2016/2016', {
      template: "<jd-target2016></jd-target2016>"
    })

    .when('/projects/target/2017/2017', {
      template: "<jd-target2017></jd-target2017>"
    })

    .when('/projects/mlt', {
      template: "<jd-mlt></jd-mlt>"
    })

    .when('/projects/mlt/part1', {
      template: "<jd-part1></jd-part1>"
    })

    .when('/projects/mlt/part2', {
      template: "<jd-part2></jd-part2>"
    })

    .when('/projects/mlt/part3', {
      template: "<jd-part3></jd-part3>"
    })

    .when('/projects/mlt/part4', {
      template: "<jd-part4></jd-part4>"
    })

    .when('/tech/algorithms', {
      template: "<jd-algorithms></jd-algorithms>"
    })

    .when('/tech/cluster', {
      template: "<jd-cluster></jd-cluster>"
    })

    .when('/tech/regression', {
      template: "<jd-regression></jd-regression>"
    })

    .when('/tech/temperature', {
      template: "<jd-temperature></jd-temperature>"
    })

    .when('/tech/website', {
      template: "<jd-website></jd-website>"
    })

    .when('/interests', {
      template: "<jd-interests></jd-interests>"
    })

    .when('/interests/culture', {
      template: "<jd-culture></jd-culture>"
    })

    .when('/interests/fitness', {
      template: "<jd-fitness></jd-fitness>"
    })

    .when('/interests/photography', {
      template: "<jd-photography></jd-photography>"
    })

    .when('/interests/travel', {
      template: "<jd-travel></jd-travel>"
    })

    .when('/interests/travel/colombia', {
      template: "<jd-colombia></jd-colombia>"
    })

    .when('/interests/travel/ecuador', {
      template: "<jd-ecuador></jd-ecuador>"
    })

    .when('/interests/travel/gambia', {
      template: "<jd-gambia></jd-gambia>"
    })

    .when('/interests/travel/morocco', {
      template: "<jd-morocco></jd-morocco>"
    })

    .when('/interests/travel/peru', {
      template: "<jd-peru></jd-peru>"
    })

    .when('/interests/travel/senegal', {
      template: "<jd-senegal></jd-senegal>"
    })

    .when('/contact', {
      template: "<jd-contact></jd-contact>"
    })

    .when('/notFound', {
      template: "<jd-not-found></jd-not-found>"
    })

    .when('/rogueDomain', {
      template: "<jd-rogue-domain></jd-rogue-domain>"
    })

    .otherwise({
      redirectTo: "/notFound"
    });
});
