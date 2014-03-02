angular.module('jqLite++', [])
  .factory('jqLitePlusPlus', function () {

    return function (fctCollection) {

      angular.forEach(fctCollection, function (fn, name) {

        var jqLite = angular.element;

        jqLite.prototype[name] = function () {

          var isReturningAValue, value;

          for (var i = 0; i < this.length; i++) {

            value = fn.apply(this[i], arguments);

            if (isReturningAValue === void 0) {
              isReturningAValue = !!value;
            }

          }

          return isReturningAValue ? value : this;

        };

      });

    };
  });



