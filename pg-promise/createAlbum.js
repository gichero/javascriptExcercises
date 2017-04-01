// var co = require('co');
var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var connect = require('./access');

var res = [];

var db = pgp(connect);

prompt('album name: ')
.then(function (albumName)(val){
    return prompt('album year: ');
})
.then(function (albumYear)(val){
    return prompt('artist Id: ');
})
then(function(artistId){
    return db.none('insert into album values '+"(default)")
})



.catch(function(err){
    console.log('There is a problem: ');
});
