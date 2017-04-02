var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db_2'
});

prompt('Album name? ')
  .then(function(album_name) {
    return [album_name, prompt('Album year? ')];
  })
  .spread(function(album_name, album_year) {
    return [album_name, album_year, prompt('Artist ID? ')];
  })
  .spread(function(album_name, album_year, artist_id) {
    var sql = 'insert into album values ' +
    "(default, '" + album_name + "', "
    + artist_id + ", " + album_year + ")";
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
