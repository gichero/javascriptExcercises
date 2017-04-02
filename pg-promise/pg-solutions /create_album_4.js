var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db_2'
});


function createAlbum() {
  // an outside variable, not necessarily global
  var album = {};

  prompt('Album name? ')
    .then(askYear)
    .then(askArtistId)
    .then(createAlbum)
    .catch(function(err) {
      console.log(err.message);
    })
    .then(printResultsAndAskAgain)
    .then(function(add) {
      if (add.toUpperCase() === 'Y') {
        createAlbum();
      } else {
        console.log('Bye');
        pgp.end();
        prompt.finish();
      }
    });

  function askYear(album_name) {
    album.name = album_name;
    return prompt('Album year? ');
  }

  function askArtistId(album_year) {
    album.year = album_year;
    return prompt('Artist ID? ');
  }

  function createAlbum(artist_id) {
    album.artist_id = artist_id;
    var sql = 'insert into album values ' +
    "(default, '" + album.name + "', "
    + album.artist_id + ", " + album.year + ")";
    console.log('SQL: ' + sql);
    return db.result(sql);
  }

  function printResultsAndAskAgain(result) {
    console.log('Created ' + result.rowCount + ' albums.');
    return prompt('Add another album? (Y/N) ');
  }
}

createAlbum();
