(function(){
    "use strict";
    //register two controllers, one for raw JSON data the other for tabular presentation in the ui-grid
    angular.module('advarics.Controllers',[])
        .controller('MainCtrl', MainCtrl)
        .controller('DirectivesCtrl', DirectivesCtrl);

    //get some JSON data
    function MainCtrl(RetailService){
        var vm = this;
        vm.currentServerUrl = '';
        vm.type = 'Products';
        vm.dataReceived = false;
        vm.dataSource = RetailService.getCurrentDataSource();

        vm.getGridOptions = function(){
            return RetailService.getGridOptions();
        };

        vm.getData = function(){ //again, we get our data not inside a controller but via a service
            //never put any logic inside a controller and do never modify DOM from within it
            RetailService.getData(vm.type)
                .then(function(data){
                    vm.dataReceived = true;
                    vm.result = JSON.stringify(data.value); //display it in the text area of the rest.html view
                    RetailService.persistCurrentDataSource(RetailService.createDataSource(data.value));
                    //for later displaying in table.html. We persist the data because the same controller will be used in
                    //table.html and therefore it will be created anew. Keep in mind that this will be a different instance
                    //of the same Controller Class "MainCtrl" and therefore the data received via RetailService in one
                    //of them will not be reusable in the another one. Therefore we rely on services which are Singletons.
                    //Services are for persisting data and reusing them throughout the application. Of course, this is just an
                    //example and could be done "differently" and surely "better" but the point it to keep in mind that
                    //controllers transient things which get created for every view. Services are not because they're Singletons.
                },
                function(data){ //show a message if some error happened
                    bootbox.dialog({
                        message: data,
                        title: 'Error',
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

    function DirectivesCtrl(){
        var vm = this;
        vm.message = "it works!";
    }

}());
