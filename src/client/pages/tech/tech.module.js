angular.module('tech', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
      .state('algorithms', {
        url: '/tech/algorithms',
        template: "<jd-algorithms></jd-algorithms>"
      })

      .state('cluster', {
        url: '/tech/cluster',
        template: "<jd-cluster></jd-cluster>"
      })

      .state('regression', {
        url: '/tech/regression',
        template: "<jd-regression></jd-regression>"
      })

      .state('temperature', {
        url: '/tech/temperature',
        template: "<jd-temperature></jd-temperature>"
      })

      .state('website', {
        url: '/tech/website',
        template: "<jd-website></jd-website>"
      })
  });
