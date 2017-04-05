const express = require ('express');
const Promise = require('bluebird');
const hbs = require('hbs');
const pgp = require('pg-promise')({

  promiseLib: Promise
});
const bodyParser = require('body-parser');
const app = express();

const dbconfig = require('./config');
const db = pgp(dbconfig);

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

//home page path
app.get('/', function(req,res){
    res.render('search.hbs');
    });

// submit search path
app.get('/search',function(req,res, next){
    let term = req.query.search;
    console.log('Term', term);
    //db.any(`select * from restaurant where restaurant.name ilike '%${term}%'`)
    db.any(`select * from restaurant where restaurant.'%${term}%' = $1`, %${term}%)
    .then(function(resultsArray){
        console.log('results', resultsArray);
        res.render('search_results.hbs', {
            result: resultsArray
        });
    })
    .catch(next);

});

//restaurant page path
app.get('/restaurant/:id', function(req, res, next){
    let id = req.params.id;
    db.any(`
        select
          reviewer.name as reviewer_name,
          review.title,
          review.stars,
          review.review
        from
          restaurant
        inner join
          review on review.restaurantid = restaurant.restaurantid
        inner join
          reviewer on review.reviewerid = reviewer.reviewerid
        where restaurant.restaurantid = ${id}`)

    .then(function(reviews){

        return [
            reviews,
            db.one(`select name from restaurant where restaurantid = ${id}`)
        ]
    })
    .spread(function(reviews, restaurant) {
      res.render('restaurant.hbs', {
        restaurant: restaurant,
        reviews: reviews
      });
    })

    .catch(next);
});


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
