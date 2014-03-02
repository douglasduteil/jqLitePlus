ddescribe('jqLite+trigger', function () {

    var bodyElement;

    beforeEach(module('jqLite+trigger'));

    // IMPORTANT !
    // The inject here will trigger all the angular.module#run() functions !
    beforeEach(inject(function () {
        // Initial content
        bodyElement = angular.element('<div class="temp-body"></div>');
    }));

    afterEach(function () {
        bodyElement.remove();
    });

    describe("trigger(eventType)", function () {

        angular.forEach('click dblclick mousedown mouseup mouseover mouseout mousemove keydown keyup keypress submit focus blur copy cut paste'.split(' '),
            function(name) {
                it('should trigger a '+ name +' event', function () {
                    var foo = {};
                    foo.bar = function(){};
                    spyOn(foo, 'bar');
                    bodyElement.on(name, foo.bar);
                    bodyElement.trigger(name);
                    expect(foo.bar).toHaveBeenCalled();
                });
            }
        );

        angular.forEach('click dblclick mousedown mouseup mousemove'.split(' '),
            function(name) {
                it(name +' event should trigger a mouse event with custom client positions', function () {
                    var foo = {};
                    foo.bar = function(event){
                        expect(event).toBeDefined();
                        expect(event.clientX).toEqual(10);
                        expect(event.clientY).toEqual(1);
                    };
                    spyOn(foo, 'bar').andCallThrough();
                    bodyElement.on(name, foo.bar);
                    bodyElement.trigger(name, {y : 1, x : 10});
                    expect(foo.bar).toHaveBeenCalled();
                });
            }
        );


        // TODO : make more advance testing
    });

});
