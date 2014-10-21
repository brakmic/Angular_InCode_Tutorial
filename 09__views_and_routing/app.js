(function(){
    "use strict";
    //create angular main module and bind to its dependencies
    angular.module('app', [
            'ngRoute',
            'ngGrid',
            'advarics.Controllers',
            'advarics.Services'
      ])
    .constant('baseHref', '/')  //WebApp-Root
    //configure routing
    .config(config);

    function config($locationProvider, $routeProvider){

      $locationProvider.html5Mode(true); //use pushState to avoid ugly # (but angular will automatically fall back on older browsers)
      //create a routing table
      //Note that this "routeProvider can only map route->page. To get a more granular routing (url to a nested view) look at ui-router:
      //https://github.com/angular-ui/ui-router
      //also watch the excellent video from Joel Hooks: https://egghead.io/lessons/angularjs-introduction-ui-router
      $routeProvider.
        when('/',
        {
            templateUrl: '09__views_and_routing/views/rest.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'  //bind the controller context to this variable
        }).
        when('/table', {
          templateUrl: '09__views_and_routing/views/table.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/'  //Fallback-Route
        });
      }

}());
