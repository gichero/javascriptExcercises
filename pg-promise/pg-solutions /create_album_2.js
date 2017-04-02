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
    var album = {
      name: album_name
    };
    return [album, prompt('Album year? ')];
  })
  .spread(function(album, album_year) {
    album.year = album_year;
    return [album, prompt('Artist ID? ')];
  })
  .spread(function(album, artist_id) {
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
