var async = require('async');
var fs = require('fs');

var filenames = [
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
var filepath = './';

function callback(err){
    if(err){
        console.log(err);
    }
    console.log('it worked');
}


async.filter(filenames, function(filepath,callback){
    fs.access(filepath,function(err){
        callback(null,!err);
        });
    },function(err,results){
        if(err){
            console.log(err.message);
        }
        console.log(results);
});
