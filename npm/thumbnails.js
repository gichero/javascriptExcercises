// Extract a function createThumbnails that takes as input dir - the directory to read files from, and resizes all images in that directory. You will want to extract "images" out as the dir variable instead of using the hard-code directory name.
// Move the function into a module create-thumbnails.js and have it return just the function when it is required. Write a test program to test/exercise the module.
//

var fs = require('fs');
var gm = require('gm');
var async = require('async');


function createThumbnails(dir, callback){

    function resizeImage(filename, callback) {
      gm(filename)
        .resize(240, 240)
        .write(filename, callback);
    }

    fs.readdir( dir, function(err, files) {
      if (err) {
        callback(err);
        return;
      }
      //console.log('before', files);
      files = files.map(function(filename) {
        return dir + '/' + filename;
      });
      //console.log('after', files);
      async.each(files, resizeImage, function(err) {
        if (err) {
          callback(err.message);
          return;
        }
        //console.log('It worked.');
        callback(null);
      });
    });
}

 module.exports = createThumbnails;
