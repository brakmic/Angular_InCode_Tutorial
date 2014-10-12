(function(){
    "use strict";
    //create an angular app
    var app = angular.module('app', []);
    //register dependencies
    app.factory('RetailFactory', RetailFactory);
    //register controller
    app.controller('AdvaricsCtrl', AdvaricsCtrl);

    //controller a service (yes, "RetailFactory" is still a service despite the "wrong" suffix)
    function AdvaricsCtrl(RetailFactory){
        var vm = this;
        vm.currentServerUrl = '';
        //get available servers
        vm.type = 'Persons';
        //here we put the data we've received from server
        vm.result = '';

        vm.getData = function(){ //Get data from ??? ... well, it depends on what's inside the service!
                                 //This way of decoupling code makes testing way easier because it's a no-brainer
                                 //to replace the actual service-implementation with some mock
          RetailFactory.getData(vm.type)
          .then(function(data){
            vm.result = JSON.stringify(data);
            console.log(JSON.stringify(data));
          },
          function(data){ //show a nicely designed error message box
            bootbox.dialog({
              message: data,
                title: 'Could not get any data from ' + vm.currentServerUrl,
                buttons: {
                  main: {
                    label: "OK",
                    className: "btn-primary"
                  }
                }
            });
          });
        };
    }

    function RetailFactory($http, $q){
        var service = {},
            protocol = 'http://',
            server = 'services.odata.org',
            baseUrl = '/V3/OData/OData.svc',
            api = '/',
            format = '?$format=json',
            fullUrl = '';

        //**** internal functions ****
        var createUrl = function(type) {
          return fullUrl = protocol + server + baseUrl + api + type + format;
        };

        //********* API *****************
        service.getData = function(type){
          createUrl();
          var deferedObject = $q.defer(); //we create a deferred object that represents a future value
                                          //because we'll access a remote service the return value may or may
                                          //not get returned at some point in time.
                                          //More about it here: https://docs.angularjs.org/api/ng/service/$q
          $http({                         //Angular's $http is like jQuery's $.ajax

            method: 'GET',                //a HTTP-method (GET, POST, PUT etc.)
            url: createUrl(type)          //what services we'd like to call
                                          //there are many other option too, like setting extra headers etc.
          }).success(function(data){      //we define functions that will deal with the promise object that can
                                          //be "resolved", "rejected", produce an error, report progress etc.
            deferedObject.resolve(data);
          }).error(function(data, status, headers, config){
            deferedObject.reject('Exception: Http-Call aborted!\r\nStatus: ' + status);
          });
          return deferedObject.promise;
        };

        return service; //we return this service object from its factory.
    }

}());
