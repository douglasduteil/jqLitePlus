angular.module('jqLite+prev', ['jqLite++'])
  .run(function (jqLitePlusPlus) {
    jqLitePlusPlus({

      prev: function prevFn(selector) {
        if (selector) {
          throw Error('onargs', 'jqLite#prev() does not support the `selector` parameters for now');
        } else {
          return angular.element(this.previousElementSibling);
        }
      }

    });
  })
;
