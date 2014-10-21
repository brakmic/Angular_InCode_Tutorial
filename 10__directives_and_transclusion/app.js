(function(){
    "use strict";
    //activate angular and bind needed modules
    angular.module('app', [
            'ngRoute',
            'ngGrid',
            'advarics.Controllers',
            'advarics.Services',
            'advarics.Directives'
      ])
    .constant('baseHref', '/')
    .config(config);

    function config($locationProvider, $routeProvider){

      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/',
        {
            templateUrl: '10__directives_and_transclusion/views/rest.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        when('/table', {
          templateUrl: '10__directives_and_transclusion/views/table.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        when('/directives', {
          templateUrl: '10__directives_and_transclusion/views/directives.html',
              controller: 'DirectivesCtrl',
              controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/'
        });


      }

}());
