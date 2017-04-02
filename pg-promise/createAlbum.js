var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: Promise
});

// var res = [];

var db = pgp(connect);

prompt('album name: ')
.then(function (albumName){
    return [albumName,prompt('album year: ')];
})
.spread(function(albumName, albumYear) {
  return [albumName, albumYear, prompt('Artist ID? ')];
})
.spread(function(albumName, albumYear, artistId) {
  var sql = 'insert into album values ' +
  "(default, '" + albumName + "', "
  + artistId + ", " + albumYear + ")";
  console.log('SQL: ' + sql);
  return db.result(sql);
})
.then(function(result) {
  console.log('# of rows created ' + result.rowCount);
  console.log('It worked');
})
.catch(function(err) {
  console.log(err.message);
});
