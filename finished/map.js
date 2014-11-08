
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("Map", [function(){
            var vm = this;
            vm.message = "Hello Map";
        }]);
}());