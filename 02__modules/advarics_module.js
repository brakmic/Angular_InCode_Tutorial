(function(){
    "use strict";

    //here we defina a module which is a dependency of the main module, the "app"

    angular.module('advaricsModule',[])
    .controller('AdvaricsCtrl', AdvaricsCtrl); //through "chaining" we define a controller
                                               //which belongs to this module. We could also
                                              //define it separately by using the returned instance reference
                                              //from angular.module-Call. It depends on personal preference
                                              //and/or your guide lines. But beware, too many chains can lead
                                              //to unwanted compiler errors if you put a semicolon
                                              //at the wrong position.

    function AdvaricsCtrl(){ //it's the angular-way to define Controller names with the suffix *Ctrl
        var vm = this;       //here we use the "controller As" option that's available since v1.2 of angular.
                             //The older way was to use the injected $scope variable that gives access to the
                             //current scope of the controller. Of course, it's possible to create a controller
                             //this way but many respected Style Guides don't recommend it.
                             //Further info: John Papa'S Style Guide: https://github.com/johnpapa/angularjs-styleguide
                             //              Todd Motto's Style Guide: https://github.com/toddmotto/angularjs-styleguide
        vm.theAnswer = 'The Ultimate Answer is 42';

        //What we're doing here is basically creating a reference to out ViewModel because the controllerAs syntax
        //automatically bind the "this" to our $scope. So there's no need to touch $scope directly. We just take
        //the "this" and bind it to a local variable "vm" (ViewModel) and assign it all the objects & functions
        //we need. In this example we just put a simple string to "vm" that will be projected on the web-page
        //by using Angular's ng-bind directive. ng-bind is effectively the same like {{ }} braces but it prevents
        //the "flashing" of empty {{ }}} when the content is not available to the browser. Generally, try to avoid
        //{{ }} and use ng-bind if you need a simple "one-way binding". Do not confuse ng-bind with ng-model, because
        //the former is just for showing data from some model while the latter is for reflecting changes on both sides.
    }

}());
