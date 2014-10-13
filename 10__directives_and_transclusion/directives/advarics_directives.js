(function(){
    "use strict";

    angular.module('advarics.Directives', [])
    .directive('advMoveRight', MoveRight)    //zwei Direktiven einbinden
    .directive('advRotateTransclude', RotateTansclude)
    .directive('advSendEmail', EmailForm);


    //A directive is actually a "component" that encapsulates logic and styling. It allows us to create reusable pieces
    //of code & styling (html elements) that can change behavior and look of our HTML documents. This pieces can either
    //extend existing HTML elements or provide a completely new ones. One can also define directives as DSL (domain specific
    //languages) because they represent a solution to a certain requirements/expectations or "domains". No language is
    //perfect and therefore every coder will sooner or later try to "find a way" out of the box of his/her current language.
    //Directives are Angular's way of achieving an elegant solution for such kind of problems.

    //A directive has to be defined in a certain way by using predefined Angular constructs.
    //It needs a DDO, Directive Definition Object, which expects a linker function, a template, the controller,
    //the restrictions of a directive and many other options. Actually only the Linker is mandatory but such a directive
    //would be of no value unless you want to deliver some very theoretical representation on how directives work. Therefore,
    //we start with a definition of a two "real" directive that do something. The first one reacts to our mouse clicks and
    //moves an image to the right. The second creates a send-email-form.

    //this directive moves an element (an image for example) to the right when user clicks on it
    function MoveRight(){
        var linker = function($scope, $element, $attrs){ //This is the linker function that "links" the $scope, behavior and styling
                                                        //within the directive. The important fact inside the link function is
                                                        //that Angular's "jQLite" delivers us the actual HTML-Element which we want
                                                        //to use in our directive. Just imagine you have a jQuery object because
                                                        //it is an jQuery object :)
            var moveRight = function(){                 //Additionally we get $scope and the $attrs injected. $scope is the current
                                                        //scope of the directive and "attrs" is an array that contains all attributes
                                                        //of the jQuery-Element.
                $(this).animate({                       //In this example we define inside a linker function an extra functionality
                                                        //that reacts differently to a mouse click. The whole Element will move
                                                        //to the right.
                    left: "+=50"
                });
            };
            $element.on('click', moveRight); //we bind the event 'click' to the above function;
        };

        return { //we return the needed DDO which describes the directive so angular will know how to compile the new tags that
                 //represent our directive. Keep in mind that the naming of directives follows strict rules: every Capitral Letter
                 //will be separated with a hyphen. For example: myNewDirective => my-new-directive
            restrict: 'EA', //we set the "restriction", where the directive can be used:
                            // "A" --> as an attribute, <div my-new-directive></div>
                            // "C" --> as a Class, <div class="my-new-directive"></my-new-directive>
                            // "E" --> as an Element: <my-new-directive></my-new-directive>
                            // "M" --> as a comment: <!-- directive: my-new-directive -->
            replace: true,  //should the existing element be replaced by the result of the directive
            template: [     //template can bei either a file-name, a string, or a <script>-Tag
                            //if Angular can't find a <script> with the same name it will assume that it
                            //should be loaded from the server and will fire a GET-request
                    '<div style="position: relative; width: 50px; height: 50px;" class="advarics-thumbnail">',
                    '<a href="#" class="thumbnail">',
                    '<img src="styles/images/advarics-cart.png" alt="advarics-cart" />',
                    '</a>',
                    '</div>'
            ].join(''),
            link: linker, //we reference the above linker method
            scope: false, //do we need a scope from our current/parent context? A directive can either inherit a scope via
                          //JS-prototype chain or get a completely new scope that is now in the prototype chain.
                          // There's also the option to create a so-called "isolate scope" that will contain only certain
                          //elements from the parent scope. An isolate scope gets created by using "scope: {}".
            controller: function(){}, //a directive can also have it's own controller
            controllerAs: 'vm'        //and the same controllerAs syntax is possible too
        }
    }

    //this directive has the ability to "transclude" already existing contents/elements and inject them into itself
    //Transclusion is an advanced concept of Angular because it allows some kind of "closures" on the declarative (HTML)
    //level. Just like closures inside JavaScript make possible that inner function retain values of outer function even
    //after they return their own values transclusions allow the same for elements which are lovated inside other elements.
    //For example:
    //
    //<outer-element ng-controller="OuterCtrl as vm">
    // <div ng-bind="{{ vm.value1 }}"></div>
    // <div ng-bind="{{ vm.value2 }}"></div>
    // <div ng-bind="{{ vm.value3 }}"></div>
    //
    // <inner-element ng-transclude></inner-element> <<--- THIS element will have access to outer-element's controller and
    //                                                      its properties (value1, value2 etc.) during the HTML-compilation
    // </outer-element>
    function RotateTansclude(){
        var linker = function($scope, $element, $attrs){
            var moveRight = function(){
                $(this).find('.mini-image').toggleClass('rotate');
                console.log('Rotating image');
            };
            $element.on('click', moveRight);
        };

        return {
            restrict: 'E', //we restrict it to an HTML-element
            template: [
                '<div style="position:relative;" class="advarics-transclude-content" data-ng-transclude>',
                '</div>'
            ].join(''),
            link: linker,
            scope: true,
            transclude: true //we activate transclusion, that is: we keep access to any elements/properties from our parent elements
        }
    }

    //these directive injects a predefined send-email-form template
    function EmailForm(){
        return {
            restrict: 'E', //it can only be an HTML-element
            replace: true,
            templateUrl: 'contactform.html'
        }
    }

}());
