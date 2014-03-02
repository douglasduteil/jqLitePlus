describe('jqLite+find', function () {

    var bodyElement;

    beforeEach(module('jqLite+find'));

    // IMPORTANT !
    // The inject here will trigger all the angular.module#run() functions !
    beforeEach(inject(function () {
        // Initial content
        bodyElement = angular.element('<div class="temp-body">' +
            '<p id="sndp">Everything inside the red border is inside a div with <code>id="foo"</code>.</p>' +
            '<p lang="en" id="en">This is a normal link: <a id="yahoo" href="http://www.yahoo.com/" class="blogTest">Yahoo</a></p>' +
            '<p id="sap">This link has <code><a href="#2" id="anchor2">class="blog"</a></code>: <a href="http://simon.incutio.com/" class="blog link" id="simon">Simon Willison\'s Weblog</a></p>' +
            '</div>');
    }));

    afterEach(function () {
        bodyElement.remove();
    });

    describe("find(String)", function () {

        it('should select an id', function () {
            expect(bodyElement.find('#yahoo').text()).toEqual('Yahoo');
        });

        it('should select a class', function () {
            expect(bodyElement.find('.blogTest').text()).toEqual('Yahoo');
        });

        it('should select multiple elements', function () {
            expect(bodyElement.find('p').length).toEqual(3);
        });

        it('should select multiple elements', function () {
            expect(bodyElement.find('#sndp > code').text()).toEqual('id="foo"');
        });
    });

});
