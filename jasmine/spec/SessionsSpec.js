var myApp = angular.module("myApp", []);

describe("Unit Testing Examples", function () {
    var sessions;
    beforeEach(module('CodeCamp'));
    beforeEach(inject(function ($controller) {
        sessions = $controller('Sessions');
    }));


    it('should have a Sessions controller', function () {
        expect(sessions).toBeDefined();
    });

    it("should add two integer numbers.", function () {
        expect(sessions.add(2, 3)).toEqual(5);
    });
});