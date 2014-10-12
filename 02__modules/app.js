(function(){
    "use strict";

    //we define an app plus a dependency which lives in another file
    //this dependency is a module itself and gets created by using the very same angular.module-Call.
    var app = angular.module('app', ['advaricsModule']);

}());
