(function(){
    "use strict";
    //create our app and the service for calling the remote JSON-WS
    angular.module('advarics.Services', [])
    .factory('RetailService', RetailService);

    function RetailService($http, $q){
        var service = {},
            protocol = 'http://',
            server = 'services.odata.org',
            baseUrl = '/V3/OData/OData.svc',
            api = '/',
            format = '?$format=json',
            fullUrl = '',
            dataSet;

        //**** internal functions ****
        var createUrl = function(type) {
            return fullUrl = protocol + server + baseUrl + api + type + format;
        };

        service.persistCurrentDataSource = function(ds){
            dataSet = ds;
        };

        service.getCurrentDataSource = function(){
           return dataSet;
        };

        service.createDataSource = function(data){
            var ds = [],
                headers = getGridHeaders();
            data.forEach(function(row){
                var line = {};
                headers.forEach(function(header){
                    line[header.field] = row[header.field];
                });
                console.log(JSON.stringify(line));
                ds.push(line);
            });
            return ds;
        };

        service.getGridOptions = function(){
            var options = {
                data: 'vm.dataSource',
                showFooter: true,
                sortable: true,
                jqueryUITheme: true,
                enablePaging: true,
                enableCellSelection: false,
                enableRowSelection: true,
                columnDefs: getGridHeaders()
            };
            console.log('returning grid options: ' + JSON.stringify(options.columnDefs));
            return options;
        };

        var getGridHeaders = function(){
            return  [
                {field:'ID', displayName:'ID'},
                {field:'Name', displayName:'Name'},
                {field: 'Description', displayName: 'Description'},
                {field: 'ReleaseDate', displayName: 'ReleaseDate'},
                {field: 'DiscontinuedDate', displayName: 'DiscontinuedDate'},
                {field: 'Rating', displayName: 'Rating'},
                {field: 'Price', displayName: 'Price'}
            ];
        };

        //********* API *****************
        service.getData = function(type){
            createUrl();
            var deferedObject = $q.defer(); //We create a deferred object that represents a future value.
            //Because we'll access a remote service the return value may or may not get returned at some point in time.
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
