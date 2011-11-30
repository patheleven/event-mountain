var zombie = require( 'zombie' );

describe( "Event Mountain", function() {
  describe( "When I visit the home page", function() {
    var browser;

    beforeEach( function() {
      zombie.visit( "http://localhost:3000/", function( error, _browser, status ) {
        if( error ) throw error;
        expect(status).toBe(200);
        browser = _browser;
        asyncSpecDone();
      });
      asyncSpecWait();
    });

    it( "should have the right title", function() {
      expect(browser.text("title")).toMatch(/Event Mountain/);
      expect(browser.text("title")).toMatch(/Home/);
    });

    it("should have a link to Cylicon Valley", function() {
      expect(browser.html(".explore")).toMatch("/cylicon");
    });

  });
});
