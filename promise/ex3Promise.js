var fs = require('fs-promise');
var request = require('request-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

request.get(url)
.then(function(html){
    return html;
})
.then(function(html){
    return fs.writeFile(filename, html);
})
.catch(function(err){
    console.log('Something is wrong: ', err.message);
});
