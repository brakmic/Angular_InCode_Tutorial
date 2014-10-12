(function(){
    "use strict";

    angular.module('advaricsModule',[])
    .controller('AdvaricsCtrl', AdvaricsCtrl);

    function AdvaricsCtrl(){ //we fill our controller with an array
                            // that contains some data we're going to use in the web page
                            //basically, we'll use the entries from array to create a simple list
                            //of some companies and their websites. Same data could be fetched from a
                            //service etc. In later examples we'll see how to fetch remote data
                            //via our controller by using services/factories.
        var vm = this;
        vm.stores = [
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
