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

app.get('/search', function(req, resp, next) {
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
    })
    .catch(next);
});

app.get('/restaurant/:id', function(req, resp, next) {
  let id = req.params.id;
  db.any(`
    select
      restaurant.name as restaurant_name,
      restaurant.address,
      restaurant.category,
      reviewer.name as reviewer_name,
      review.title,
      review.stars,
      review.review
    from
      restaurant
    left outer join
      review on review.restaurant_id = restaurant.id
    left outer join
      reviewer on review.reviewer_id = reviewer.id
    where restaurant.id = ${id}
  `)
    .then(function(reviews) {
      console.log('reviews', reviews);
      resp.render('restaurant.hbs', {
        restaurant: reviews[0],
        reviews: reviews,
        hasReviews: reviews[0].reviewer_name
      });
    })
    .catch(next);
});

app.post('/submit_review/:id', function(req, resp) {

});

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
