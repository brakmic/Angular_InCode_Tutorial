(function(){
    "use strict";

    angular.module('advaricsModule',[])
    .controller('AdvaricsCtrl', AdvaricsCtrl);
    //Here we register a simple "calculator service" that'll be injected into our controller.
    //In Angular Dependency Injection is pervasive and therefore we neither have nor should manually
    //create any dependencies inside our controllers or even take care of creating services (no "new", please!)
    //We just let Angular know what services we have (by using *.service or *.factory, or *.provider) and let
    //Angular inject it into our code parts that need them. In this case it's our controller that depends on
    //"CalculatorService". We first inject the service in to our current angular instance. Internally,
    //Angular uses the $injector to inject it. Don't forget that Services are SINGLETONS and therefore
    //only one instance of this service will exist throughout the life time of the Angular app.
    angular.module('app').service('CalculatorService', CalculatorService);

    function AdvaricsCtrl(CalculatorService){ //We need "CalculatorService"
        var vm = this;
        vm.x = 0;
        vm.y = 0;
        vm.result = 0;
        //this controller function uses a function provided by our service
        vm.calculate = function(){
            console.log('Calculate called with x: ' + vm.x + ' and y: ' + vm.y);
            this.result = CalculatorService.calculate(vm.x,vm.y);
        }
    }

    //dies ist der Service
    function CalculatorService(){
        this.calculate = function(a,b){
            return Number(a) + Number(b);
        };
    }



}());
