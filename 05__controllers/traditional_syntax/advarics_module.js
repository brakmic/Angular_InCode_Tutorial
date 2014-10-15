(function(){
    "use strict";
    angular.module('advaricsModule', []).
        app.controller('TraditionalCtrl', TraditionalCtrl);

    //this is the traditional way of inserting a controller in HTML
    //now we have to use the automatically injected $scope object to propagate our variables, objects & methods
    //that can be used in HTML
    function TraditionalCtrl($scope){
        $scope.companies = [
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
