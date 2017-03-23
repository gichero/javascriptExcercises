
// Request and Cheerio are two useful modules and they can be combined to do some really cool stuff.
//
// Figure out how to use both of these modules individually.
// Use the modules together to grab the list of "packages people 'npm install' a lot" on the npmjs.org front page, store the results in an array, and print it out to the terminal.
// Bonus 2: Any module
//
// Find any npm module and learn how to use it by reading its documentation. You can do a google search for something you might be interested in and add "npm" to the search term. Or you can look through this list for some inspiration.

var request = require('request');
var cheerio = require('cheerio');

 function ('https:www.npmjs.com/#pane-homepage-pricing', function) (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
