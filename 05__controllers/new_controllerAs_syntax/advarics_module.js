(function(){
    "use strict";

    angular.module('advaricsModule',[])
    .controller('ControllerAsCtrl', ControllerAsCtrl);

    //we create a controller via the new "controllerAs" syntax
    function ControllerAsCtrl(){
        var vm = this; //we grab the "this" because "controllerAs" automatically
                        //binds $scope to "this". Therefore there's no need to
                        //use $scope to declare code that should be available in the HTML
        vm.companies = [  //we declare a simple array with some names and web pages
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


}());
