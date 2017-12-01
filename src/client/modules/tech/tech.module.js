angular.module('tech', ['shared', 'ui.router'])
  .config(function($stateProvider, jdStatesProvider) {

    var states = [
      {
        name: 'algorithms',
        url: '/tech/algorithms',
        template: "<jd-algorithms></jd-algorithms>"
      },
      {
        name: 'cluster',
        url: '/tech/cluster',
        template: "<jd-cluster></jd-cluster>"
      },
      {
        name: 'regression',
        url: '/tech/regression',
        template: "<jd-regression></jd-regression>"
      },
      {
        name: 'temperature',
        url: '/tech/temperature',
        template: "<jd-temperature></jd-temperature>"
      },
      {
        name: 'website',
        url: '/tech/website',
        template: "<jd-website></jd-website>"
      }
    ];

    jdStatesProvider.initStates($stateProvider, states);
  });
