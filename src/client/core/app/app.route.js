// Set  up routing for whole site
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/home/', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/biography/', {
      templateUrl: "client/pages/biography/biography.html"
    })

    .when('/resume/', {
      templateUrl: "client/pages/resume/resume.html"
    })

    .when('/projects/', {
      templateUrl: "client/pages/projects/projects.html"
    })

    .when('/tech/', {
      templateUrl: "client/pages/tech/tech.html"
    })

    .when('/projects/mlt', {
      templateUrl: "client/pages/projects/projects/mlt/mlt.html"
    })

    .when('/projects/target', {
      templateUrl: "client/pages/projects/projects/target/target.html"
    })

    .when('/projects/target/2016/2016', {
      templateUrl: "client/pages/projects/projects/target/2016/2016.html"
    })

    .when('/projects/target/2017/2017', {
      templateUrl: "client/pages/projects/projects/target/2017/2017.html"
    })

    .when('/projects/mlt/part1', {
      templateUrl: "client/pages/projects/projects/mlt/part1/part1.html"
    })

    .when('/projects/mlt/part2', {
      templateUrl: "client/pages/projects/projects/mlt/part2/part2.html"
    })

    .when('/projects/mlt/part3', {
      templateUrl: "client/pages/projects/projects/mlt/part3/part3.html"
    })

    .when('/projects/mlt/part4', {
      templateUrl: "client/pages/projects/projects/mlt/part4/part4.html"
    })

    .when('/tech/algorithms', {
      templateUrl: "client/pages/tech/projects/algorithms/algorithms.html"
    })

    .when('/tech/cluster', {
      templateUrl: "client/pages/tech/projects/cluster/cluster.html"
    })

    .when('/tech/regression', {
      templateUrl: "client/pages/tech/projects/regression/regression.html"
    })

    .when('/tech/temperature', {
      templateUrl: "client/pages/tech/projects/temperature/temperature.html"
    })

    .when('/tech/website', {
      templateUrl: "client/pages/tech/projects/website/website.html"
    })

    .when('/interests', {
      templateUrl: "client/pages/interests/interests.html"
    })

    .when('/interests/travel', {
      templateUrl: "client/pages/interests/travel/travel.html"
    })

    .when('/interests/travel/colombia', {
      templateUrl: "client/pages/interests/travel/countries/colombia/colombia.html"
    })

    .when('/interests/travel/ecuador', {
      templateUrl: "client/pages/interests/travel/countries/ecuador/ecuador.html"
    })

    .when('/interests/travel/peru', {
      templateUrl: "client/pages/interests/travel/countries/peru/peru.html"
    })

    .when('/interests/travel/senegal', {
      templateUrl: "client/pages/interests/travel/countries/senegal/senegal.html"
    })

    .when('/interests/travel/gambia', {
      templateUrl: "client/pages/interests/travel/countries/gambia/gambia.html"
    })

    .when('/interests/travel/morocco', {
      templateUrl: "client/pages/interests/travel/countries/morocco/morocco.html"
    })

    .when('/interests/photography', {
      templateUrl: "client/pages/interests/photography/photography.html"
    })

    .when('/interests/fitness', {
      templateUrl: "client/pages/interests/fitness/fitness.html"
    })

    .when('/interests/culture', {
      templateUrl: "client/pages/interests/culture/culture.html"
    })

    .when('/contact/', {
      templateUrl: "client/pages/contact/contact.html"
    });
});
