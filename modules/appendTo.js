
angular.module('jqLite+appendTo', ['jqLite++'])
.run(function(jqLitePlusPlus){
  jqLitePlusPlus({

    appendTo: function appendToFn(parent) {

      angular.element(parent).append(this);

    }

  });
})
;
