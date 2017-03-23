var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';

fs.readFile(filename)
.then(function(buffer){
var content = buffer.toString();
    return content;
})
.then(function(content){
    return fs.writeFile(outputFilename, content.toUpperCase());    
})
.catch(function(err) {
    console.log('something went wrong');
    console.log('Because: ', err.message);
});
