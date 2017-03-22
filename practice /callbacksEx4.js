// You can use fs.readdir function to list all the files that exist in a directory. Write a program to resize all .png files within a directory into 240x240 thumbnails. Hint: you can use the downloadAndCreateThumbnail function you made.

var fs = require('fs');
var gm = require('gm');
var request = require('request');

// read dir to get the files
// async.each/map  - transform each file
// in function transform
// a) prepend directory name to the file
// b)gm to resize and write the thumbnail(call the callback)
