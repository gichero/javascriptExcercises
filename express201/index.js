const express = require ('express');
const Promise = require('bluebird');
const hbs = require('hbs');
const session = require('express-session');
const pgp = require('pg-promise')({


  promiseLib: Promise
});
const bodyParser = require('body-parser');
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
    secret: 'qwertycat',
    cookie: {
        maxAge: 6000
    }
}));

const dbconfig = require('./config');
const db = pgp(dbconfig);

//view engine middleware
app.set('view engine', 'hbs');


app.post('/', function(req, res){
    req.render('login.hbs');
    res.redirect('/search');
});

//home page path
app.get('/', function(req,res){
    res.render('search.hbs');
    });

// submit search path
app.get('/search',function(req,res, next){
    let term = req.query.search;
    console.log('Term', term);
    db.any(`select * from restaurant where restaurant.name ilike '%${term}%'`)
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
    let restaurantid = req.params.id;
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
        where restaurant.restaurantid = ${restaurantid}`)

    .then(function(reviews){
        return [
            reviews,
            db.one(`select name from restaurant where restaurantid = ${restaurantid}`)
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
//post review path
app.post('/submit_review/:id', function (req, res, next){
    let restaurantid = req.params.id;
    console.log('restaurant ID', id);
    console.log('from the form', req.body);
    db.none(`insert into review values
      (default, NULL, ${req.body.stars}, '${req.body.title}', '${req.body.review}', ${restaurantid})`)
      .then(function() {
        res.redirect(`/restaurant/${restaurantid}`);
      })
      .catch(next);
  });

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
