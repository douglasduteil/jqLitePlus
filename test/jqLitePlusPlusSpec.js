describe('jqLite++', function () {
  var jqLitePlusPlus, bodyElement;

  beforeEach(module('jqLite++'));

  beforeEach(inject(function (_jqLitePlusPlus_) {
    jqLitePlusPlus = _jqLitePlusPlus_
  }));

  beforeEach(function () {
    bodyElement = angular.element('<div class="temp-body"></div>');
    angular.element(document.body).prepend(bodyElement);
  });
  afterEach(function () {
    bodyElement.remove();
  });

  describe('service function', function () {

    it('should return a function', function () {
      expect(angular.isFunction(jqLitePlusPlus)).toBeTruthy();
    });

    it('should extend angular.element.prototype', function () {
      expect(angular.element.prototype.foo).not.toBeDefined();
      jqLitePlusPlus({ foo: angular.noop });
      expect(angular.element.prototype.foo).toBeDefined();
    });

  });
  // describe 'service function'

  describe('created function', function () {

    beforeEach(function () {
      jqLitePlusPlus({ foo: angular.noop });
    });

    it('should return the jqLite element', function () {
      expect(bodyElement.foo()).toEqual(bodyElement);
    });

    it('should return the jqLite element', function () {
      jqLitePlusPlus({ bar: function () { return 'baz'; } });
      expect(bodyElement.bar()).toEqual('baz');
    });

    it('should be called with two arguments', function () {
      spyOn(angular.element.prototype, 'foo');
      bodyElement.foo(0, 1);
      expect(bodyElement.foo).toHaveBeenCalledWith(0, 1);
    });

    it('should use the element as this in the functions', function () {
      spyOn(angular.element.prototype, 'foo').andCallFake(function () {
        expect(this).toEqual(bodyElement);
      });
      bodyElement.foo();
    });

  });
  // describe 'created function'


});
