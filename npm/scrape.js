
// Request and Cheerio are two useful modules and they can be combined to do some really cool stuff.
//
// Figure out how to use both of these modules individually.
// Use the modules together to grab the list of "packages people 'npm install' a lot" on the npmjs.org front page, store the results in an array, and print it out to the terminal.
// Bonus 2: Any module
//
// Find any npm module and learn how to use it by reading its documentation. You can do a google search for something you might be interested in and add "npm" to the search term. Or you can look through this list for some inspiration.

var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');

var options = {
    url: 'https://en.wikipedia.org/wiki/singapore'
};


request.get(options, function(err, response, html) {
    if (err) {
        console.log(err.message);
        return;
    }

    var $ = cheerio.load(html);
    var country = $('#firstHeading').text();
    var capital = $("th:contains('Capital')").next().children('a').text();
    var religion = $("#mw-content-text > table.infobox.geography.vcard > tr:nth-child(11) > td > a:nth-child(1)").text();

    console.log('The capital of ' + country + ' is ' + capital + '. Currently the largest city in ' + country + ' is ' +  religion + '.');

});
