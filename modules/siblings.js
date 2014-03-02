
angular.module('jqLite+siblings', ['jqLite++'])
.run(function(jqLitePlusPlus){
  jqLitePlusPlus({

    siblings: function siblingsFn() {
      var element = this;
      return Array.prototype.filter.call(element.parentNode.children, function(child){
        return child !== element;
      });

    }

  });
})
;


