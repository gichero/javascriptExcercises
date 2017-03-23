// You can use fs.readdir function to list all the files that exist in a directory. Write a program to resize all .png files within a directory into 240x240 thumbnails. Hint: you can use the downloadAndCreateThumbnail function you made.

var fs = require('fs');
var gm = require('gm');
var request = require('request');

// read dir to get the files
// async.each/map  - transform each file
// in function transform
// a) prepend directory name to the file
// b)gm to resize and write the thumbnail(call the callback)

var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';

function downloadAndThumbnail(){}

var requestOptions = {
url: url,
encoding: null
};

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback){
request(requestOptions, function(err, response, data) {
  if (err) {
    callback(err);
  }

  fs.writeFile(filename, data, function(err) {
    if (err) {
      callback(err);
    }
    gm(filename)
      .resize(100, 100)
      .write(thumbnailFilename, function(err) {
        if (err) {
          callback(err);
        }
        callback(null);
      });
  });
});
}

downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
if (err) {
console.log(err.message);
return;
}
console.log('It worked');
});
