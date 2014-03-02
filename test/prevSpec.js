describe('jqLite+prev', function () {

  var bodyElement;

  beforeEach(module('jqLite+prev'));

  // Needed for the tests
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

  // FROM https://github.com/angular.element/angular.element/blob/2.1.0/test/unit/traversing.js#L573
  describe("prev([String])", function () {

    it('should select the element immediately before', function () {
      expect(bodyElement.find('#sap').prev()[0].id).toEqual("en");
    });

    it('should throw for now', function () {
      expect(function () {
        // should select the "p" immediately before
        bodyElement.find('#sndp').prev('p');
      }).toThrow();
    });

    // TODO : test those
    //  expect(bodyElement.find("#sap").prev("p")[0].id).toEqual("ap");
    //  expect(bodyElement.find("#sap").prev("div").length).toEqual(0);
    //  expect(bodyElement.find("#sap").prev("p, div")[0].id).toEqual("ap");
  });

});
