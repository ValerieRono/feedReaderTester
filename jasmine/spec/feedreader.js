/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. It is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a URL defined', function(){
            for(var i=0; i<allFeeds.length; i++){
                expect((allFeeds[i]).url).toBeDefined();
                expect((allFeeds[i]).url.length).not.toBe(0);
            }
        });
    
        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined', function(){
            for(var i=0; i<allFeeds.length; i++){
                expect((allFeeds[i]).name).toBeDefined();
                expect((allFeeds[i]).name.length).not.toBe(0);
            }
        })
    });


    /* A new test suite named "The menu" */
    describe('The menu', function(){
        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
        
        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });
    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('initial Entries', function(){
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        beforeEach(function(done) {
          loadFeed(0, function(){
              done();
          });
        });

        it('are not empty', function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var content;
        beforeEach(function(done) {
          loadFeed(0, function() {
            content = document.querySelector(".feed").innerHTML;
            loadFeed(1, function() {
              done();
            });
          });
        });

        it('changes content when new feed is loaded', function() {
          var changedContent = document.querySelector(".feed").innerHTML;
          expect(content).not.toBe(changedContent);
        });
    });
    

        
}());
