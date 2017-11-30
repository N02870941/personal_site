angular.module('projects', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
      .state('target', {
        url: '/projects/target',
        template: "<jd-target></jd-target>"
      })

      .state('mlt', {
        url: '/projects/mlt',
        template: "<jd-mlt></jd-mlt>"
      })

      .state('part1', {
        url: '/projects/mlt/part1',
        template: "<jd-part1></jd-part1>"
      })
      .state('2016', {
        url: '/projects/target/2016/2016',
        template: "<jd-target2016></jd-target2016>"
      })

      .state('2017', {
        url: '/projects/target/2017/2017',
        template: "<jd-target2017></jd-target2017>"
      })

      .state('part2', {
        url: '/projects/mlt/part2',
        template: "<jd-part2></jd-part2>"
      })

      .state('part3', {
        url: '/projects/mlt/part3',
        template: "<jd-part3></jd-part3>"
      })

      .state('part4', {
        url: '/projects/mlt/part4',
        template: "<jd-part4></jd-part4>"
      })
  });
