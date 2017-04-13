const express = require('express');
const Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const db = pgp({
  database: 'restaurant_v2'
});

app.get('/', function(req, resp) {
  resp.render('search_form.hbs');
});

app.get('/search', function(req, resp) {
  let term = req.query.searchTerm;
  console.log('Term:', term);
  db.any(`
    select * from restaurant
    where restaurant.name ilike '%${term}%'
    `)
    .then(function(resultsArray) {
      console.log('results', resultsArray);
      resp.render('search_results.hbs', {
        results: resultsArray
      });
    });
});

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
