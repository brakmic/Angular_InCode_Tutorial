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
            templateUrl: 'views/rest.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        when('/table', {
            templateUrl: 'views/table.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        when('/directives', {
              templateUrl: 'views/directives.html',
              controller: 'DirectivesCtrl',
              controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/'
        });


      }

}());
