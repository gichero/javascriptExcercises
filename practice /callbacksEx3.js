
var async = require('async');
var fs = require('fs');

var filename = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];
function callback(err){
    if(err){
        console.log(err);
    }
    console.log('it worked');
}

function writeSomething(file, callback){
    fs.writeFile(file, 'NodeJs is fun', callback());
}
async.each(filename, writeSomething, callback());
