(function(){
    "use strict";
    //A controller needs a service from a factory. Therefore we have to include the
    //name of this factory together with the controller name during it's instantiation.
    //Usually, we should not name factory results with the suffix "Factory" but "Service",
    //because every factory always returns a service. There is almost no difference between
    //the two. But, because we'll later introduce more services and factories, and even a provider
    //I keep the suffix "Factory" just for documentation purposes. Later, all services will always
    //get a "proper" suffix.
    angular.module('advaricsModule',[])
    .controller('AdvaricsCtrl', ['AdvaricsFactory', AdvaricsCtrl]);

    function AdvaricsCtrl(AdvaricsFactory){ //Angular's DI provides the controller with the proper service
        var vm = this;
        vm.companies = AdvaricsFactory.getCompanies(); //we use the service to get the data we need
    }

}());
