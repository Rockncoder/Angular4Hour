(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("PresenterCtrl", ['dataService','$routeParams', '$filter', function (dataService, $routeParams, $filter) {
            var vm = this;
            vm.memberId = $routeParams.memberId;

            dataService.getPresenters(function(data){
                vm.currentPresenter = $filter('filter')(data, {MemberID: vm.memberId})[0];
            });

            dataService.getSessions(function(data){
                vm.sessions = $filter('filter')(data, {MemberID: vm.memberId});
            });
        }]);
}());