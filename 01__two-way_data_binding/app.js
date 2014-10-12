(function(){ //we always put everything in IIFE (immediately invoked function expression) to prevent pollution of global JS-namespace
    "use strict";

    //this is the starting point of every angular-app. Use angular global object to register a module
    //that will host the application. Give it a name, like "app", an set its dependencies, if any. In
    //this case we don't need any additional modules, so we leave empty [] braces. Also, keep in mind
    //that this call is a "Setter" which creates a new module and it MUST have at least the empty [] brackets.
    //If you use it without empty brackets, like angular.module('app'); you'd give Angular a command that
    //you're interested in the current instance of the module 'app'. This is the other call type, the "Getter".
    //We'll use it later when it comes to registering new modules, factories, services, routing etc.


    var app = angular.module('app', []); //actually, we don't need the "var app" but this is just to show that
                                         //we get an instance from the "Setter" too.
}()); //and we execute the IIFE. Note that many other examples use })(); instead of }());
      //I prefer putting all braces together because that's where the call happens.
