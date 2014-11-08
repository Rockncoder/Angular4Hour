
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("SessionCtrl", ['dataService', '$routeParams', '$filter', function(dataService, $routeParams,  $filter){
            var vm = this;
            vm.message = "Hello Sessions";
            vm.pageClass = "page-sessions";
            vm.sessionId = $routeParams.sessionId;

            dataService.getSessions().then(function(data) {
                vm.sessions = data;
                vm.currentSession = $filter('filter')(data, {SessionID: vm.sessionId})[0];
            });
        }]);
}());