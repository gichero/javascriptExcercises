var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db_2'
});

// an outside variable, not necessarily global
var album = {};

prompt('Album name? ')
  .then(function(album_name) {
    album.name = album_name;
    return prompt('Album year? ');
  })
  .then(function(album_year) {
    album.year = album_year;
    return prompt('Artist ID? ');
  })
  .then(function(artist_id) {
    album.artist_id = artist_id;
    var sql = 'insert into album values ' +
    "(default, '" + album.name + "', "
    + album.artist_id + ", " + album.year + ")";
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
