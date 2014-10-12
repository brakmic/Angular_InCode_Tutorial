(function(){
    "use strict";
    var app = angular.module('app', ['advaricsModule'])
    .factory('AdvaricsFactory', AdvaricsFactory); //we register the main app and
                                                  //introduce a factory that'll be used by the controller.


    //Factories and services are almost equivalent and their usage is very similar. While factories
    //return a set of functions, services return "newable" objects. In a typical service you'd see
    //some exported methods which are bound to "this", like
    // function MyService()
    // {
    //      this.myFunc = function () {
    //                         return 1;
    //                       };
    // }
    //
    //and we register it like this: angular.module('myApp', []).service('MyService', MyService);
    //
    //
    //And factories define service this way:
    //
    //function MyServiceViaFactory(){
    //  var MyServiceViaFactory = {};
    //  MyServiceViaFactory.myFunc = function(){
    //                              return 1;
    //                       };
    //  return MyServiceViaFactory;
    //}
    //
    //
    //and we register them: angular.module('myApp', []).factory('MyService', MyServiceViaFactory);
    //
    //
    //Note the difference between the two. In the example above we let Angular create a (singleton!) instance of "MyService"
    //while the factory-based service returns an object named "MyServiceViaFactory" that contains a method we can use.
    //
    //as already stated, the name of this service should not contain "Factory" but "Service", because it doesn't matter
    //which pattern produces them but only what they're. However, just to distinguish them in the beginning of this
    //tutorial series. I use the "wrong" naming.
    function AdvaricsFactory(){
        return {
                getCompanies: function() {
                    return [
                                {
                                    id: '1',
                                    name: 'ODLO',
                                    url: 'www.odlo.com'
                                },
                                {
                                    id: '2',
                                    name: 'Sperk',
                                    url: 'www.sport-sperk.de'
                                },
                                {
                                    id: '3',
                                    name: 'Sport 2000',
                                    url: 'www.sport2000.de'
                                }
                            ];
                    }
            };
    }

}());
