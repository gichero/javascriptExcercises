//splice n files

require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice(nfiles){
    return Promise.all(nfiles.map(function (file);
    return fs.readFile(file);

    then(function(buffer){
        return [buffer, fs.readfile(files + 1)];
    })
    spread (function(buffer +1 ){

    });

}




  splice(['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'], 'output')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });
