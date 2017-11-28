// Set  up routing for whole site
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      template: "<my-home></my-home>"
    })

    .when('/home', {
      template: "<my-home></my-home>"
    })

    .when('/biography', {
      template: "<my-biography><my-biography>"
    })

    .when('/resume', {
      template: "<my-resume><my-resume>"
    })

    .when('/projects', {
      template: "<my-projects></my-projects>"
    })

    .when('/tech', {
      template: "<my-tech></my-tech>"
    })

    .when('/projects/target', {
      template: "<my-target></my-target>"
    })

    .when('/projects/target/2016/2016', {
      template: "<my-target2016></my-target2016>"
    })

    .when('/projects/target/2017/2017', {
      template: "<my-target2017></my-target2017>"
    })

    .when('/projects/mlt', {
      template: "<my-mlt></my-mlt>"
    })

    .when('/projects/mlt/part1', {
      template: "<part1></part1>"
    })

    .when('/projects/mlt/part2', {
      template: "<part2></part2>"
    })

    .when('/projects/mlt/part3', {
      template: "<part3></part3>"
    })

    .when('/projects/mlt/part4', {
      template: "<part4></part4>"
    })

    .when('/tech/algorithms', {
      template: "<my-algorithms></my-algorithms>"
    })

    .when('/tech/cluster', {
      template: "<my-cluster></my-cluster>"
    })

    .when('/tech/regression', {
      template: "<my-regression></my-regression>"
    })

    .when('/tech/temperature', {
      template: "<my-temperature></my-temperature>"
    })

    .when('/tech/website', {
      template: "<my-website></my-website>"
    })

    .when('/interests', {
      template: "<my-interests></my-interests>"
    })

    .when('/interests/culture', {
      template: "<my-culture></my-culture>"
    })

    .when('/interests/fitness', {
      template: "<my-fitness></my-fitness>"
    })

    .when('/interests/photography', {
      template: "<my-photography></my-photography>"
    })

    .when('/interests/travel', {
      template: "<my-travel></my-travel>"
    })

    .when('/interests/travel/colombia', {
      template: "<my-colombia></my-colombia>"
    })

    .when('/interests/travel/ecuador', {
      template: "<my-ecuador></my-ecuador>"
    })

    .when('/interests/travel/gambia', {
      template: "<my-gambia></my-gambia>"
    })

    .when('/interests/travel/morocco', {
      template: "<my-morocco></my-morocco>"
    })

    .when('/interests/travel/peru', {
      template: "<my-peru></my-peru>"
    })

    .when('/interests/travel/senegal', {
      template: "<my-senegal></my-senegal>"
    })

    .when('/contact', {
      template: "<my-contact></my-contact>"
    })

    .when('/notFound', {
      template: "<my-not-found></my-not-found>"
    })

    .when('/rogueDomain', {
      template: "<rogue-domain></rogue-domain>"
    })

    .otherwise({
      redirectTo: "/notFound"
    });
});
