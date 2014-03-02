angular.module('jqLite+appendTo', ['jqLite++'])
  .run(function (jqLitePlusPlus) {
    jqLitePlusPlus({

      appendTo: function appendToFn(target) {

        angular.element(target).append(this);

      }

    });
  })
;
