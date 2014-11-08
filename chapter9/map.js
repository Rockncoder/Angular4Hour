
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("MapCtrl", [function(){
            var vm = this;
            vm.message = "Hello Map";
            vm.add = add;

            function add (a, b){
                return a + b;
            }
        }]);
}());