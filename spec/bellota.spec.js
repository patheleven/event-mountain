var zombie = require("zombie");

describe("Bellota Valley", function() {
    beforeEach( function() {
      zombie.visit( "http://localhost:3000/bellota", function( error, _browser, status ) {
        if( error ) throw error;
        expect(status).toBe(200);
        browser = _browser;
        asyncSpecDone();
      });
      asyncSpecWait();
    });

    it( "should have the right title", function() {
      expect(browser.text("title")).toMatch(/Event Mountain/);
      expect(browser.text("title")).toMatch(/Bellota Valley/);
    });  
});
