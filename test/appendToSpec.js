describe('jqLite+appendTo', function () {

    var bodyElement;

    beforeEach(module('jqLite+appendTo'));

    // IMPORTANT !
    // The inject here will trigger all the angular.module#run() functions !
    beforeEach(inject(function () {
        // Initial content
        bodyElement = angular.element('<div class="temp-body"></div>');
    }));

    afterEach(function () {
        bodyElement.remove();
    });

    describe("appendTo(target)", function () {

        it('should select an id', function () {
            expect(angular.element('<p>Foo</p>').appendTo(bodyElement).parent().html()).toEqual('<p>Foo</p>');
        });

    });

});
