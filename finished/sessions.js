
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("SessionsCtrl", ['dataService', function(dataService){
            var vm = this;
            vm.message = "Hello Sessions";
            vm.add = add;
            vm.pageClass = "page-sessions";

            dataService.getSessions().then(function(data) {
                vm.sessions = data;
            });

            function add(a, b){
                return a + b;
            }
        }]);
}());