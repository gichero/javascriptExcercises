//Extract Reusable Function

// var request = require('request-promise');
// var fs = require('fs-promise');
//
// var url = 'http://css-tricks.com';
// var filename = 'css-tricks.html';
//
//
// function saveWebPage(url, filename){
//     return request(url)
//       .then(function(html) {
//         return fs.writeFile(filename, html);
//     });
// }
// saveWebPage(url, filename)
//   .then(function() {
//     console.log('Worked');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

//Extract Reusable Function 2

var fs = require('fs-promise');
var request = require('request-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

function downloadAllUrls(urls){
    var htmlPromises = urls.map(function(url) {
      return request.get(url);
  });

    return Promise.all(htmlPromises)
    .then(function(htmls) {
        var writeFilePromises = htmls.map(function(html, idx) {
          return fs.writeFile(idx + '.html', html);
        });
        return Promise.all(writeFilePromises);
    });
}
downloadAllUrls(urls)
    .then(function() {
        console.log('Worked');
    })
    .catch(function() {
        console.log(err.mesage);
    });
