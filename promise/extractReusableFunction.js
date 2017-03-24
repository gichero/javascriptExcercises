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

// var fs = require('fs-promise');
// var request = require('request-promise');
//
// var urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//   'https://en.wikipedia.org/wiki/Google_Chrome'
// ];
//
// function downloadAllUrls(urls){
//     var htmlPromises = urls.map(function(url) {
//       return request.get(url);
//     });
//
//     return Promise.all(htmlPromises)
//     .then(function(htmls) {
//         var writeFilePromises = htmls.map(function(html, idx) {
//           return fs.writeFile(idx + '.html', html);
//         });
//         return Promise.all(writeFilePromises);
//     });
// }
// downloadAllUrls(urls)
//     .then(function() {
//         console.log('Worked');
//     })
//     .catch(function() {
//         console.log(err.mesage);
//     });


//splice two files
require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice2(file1, file2, output) {
  return fs.readFile(file1)
  .then(function(buffer1) {
    return [buffer1, fs.readFile(file2)];
  })
  .spread(function(buffer1, buffer2) {
    var line1 = buffer1.toString().replace(/\n$/,"").split('\n');
    var line2 = buffer2.toString().replace(/\n$/,"").split('\n');

    var content = [0,1,2].reduce(function(str, x){
        str = str + line1[x]+' \n' + line2[x]+ '\n';

        return str;
    } ,'');

    return fs.writeFile(output, content);
  });
}
splice2('file-1.txt', 'file-2.txt', 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });

  //splice n files
// require('any-promise/register/bluebird');
// var Promise = require('bluebird');
// var fs = require('fs-promise');
//
// function splice(files){
//     return fs.readFile(file1)
//
// }




  // splice(['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'])
  // .then(function() {
  //   console.log('It worked.');
  // })
  // .catch(function(err) {
  //   console.log(err.message);
  // });
