(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("PresenterCtrl", ['dataService','$routeParams', '$filter', function (dataService, $routeParams, $filter) {
            var vm = this;
            vm.memberId = $routeParams.memberId;
            vm.presenters = dataService.getPresenters();
            vm.sessions = dataService.getSessions();
            vm.currentPresenter = $filter('filter')(vm.presenters, {MemberID: vm.memberId})[0];
            vm.sessions = $filter('filter')(vm.sessions, {MemberID: vm.memberId});
        }]);
}());