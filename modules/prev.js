

angular.module('jqLite+prev', ['jqLite++'])
.run(function(jqLitePlusPlus){
  jqLitePlusPlus({

    prev: function prevFn() {

      return this.previousElementSibling;

    }

  });
})
;
