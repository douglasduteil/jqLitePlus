angular.module('jqLite+find', ['jqLite++'])
  .run(function (jqLitePlusPlus) {
    jqLitePlusPlus({

      find: function findFn(selector) {
        return angular.element(this.querySelectorAll(selector));
      }

    });
  })
;
