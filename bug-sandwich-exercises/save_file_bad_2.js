/*

Running this file reports that it saves the file, when in reality it does not.

*/
// the file written is data/davidwalsh.html, 

var request = require('request-promise');
var fs = require('fs-promise');

var url = 'https://davidwalsh.name/';
request.get(url)
  .then(function(html) {
    return fs.writeFile('davidwalsh.html', html);//return davidwalsh.html and not data/davidwalsh.html.
  })
  .then(function() {
    console.log('Wrote file data/davidwalsh.html');
  })
  .catch(function(err) {
    console.log('Something went wrong');
    console.log(err.message);
  });
