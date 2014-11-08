var myApp = angular.module("CodeCamp", []);

describe("Unit Testing Examples", function () {
    var map;


    beforeEach(angular.mock.module('CodeCamp'));
    beforeEach(inject(function ($controller) {
        map = $controller('MapCtrl');
    }));


    it('should have a Map controller', function () {
        expect(map).toBeDefined();
    });

    it("should add two integer numbers.", function () {
        expect(map.add(2, 3)).toEqual(5);
    });
});