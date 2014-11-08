
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("PresenterCtrl", ['dataService', '$routeParams', '$filter', function(dataService, $routeParams, $filter){
            var vm = this;
            vm.message = "Hello Presenters";
            vm.memberId = $routeParams.memberId;
            vm.pageClass = "page-presenter";


            dataService.getPresenters().then(function(data) {
                vm.currentPresenter = $filter('filter')(data, {MemberID:  vm.memberId})[0];
            });

            dataService.getSessions().then(function(data) {
                vm.sessions = $filter('filter')(data, {MemberID:  vm.memberId});
            });
        }]);
}());