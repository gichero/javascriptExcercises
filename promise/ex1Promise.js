var fs = require('fs-promise');

var filename = 'file1.txt';

fs.readFile(filename)
.then(function(buffer){
    console.log('Here are the contents.');
    return fs.filename;
})
  .catch(function(err){
      console.log('There is a problem.');
      console.log('because: ', err.message);
  });
