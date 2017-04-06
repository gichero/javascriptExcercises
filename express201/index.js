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
        maxAge: 60000
    }
}));

const dbconfig = require('./config');
const db = pgp(dbconfig);

//view engine middleware
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

app.get('/login', function(req, res){
    res.render('login.hbs');
});

app.post("/submit_login", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password);
  db.one(`
    select * from login where
    username = $1 and password = $2
  `, [username, password])
    .then(function() {
      req.session.loggedInUser = username;
      res.redirect("/");
    })
    .catch(function(err) {
      res.redirect("login");
    });
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

app.use(function authentication(req, res, next) {
  if (req.session.loggedInUser) {
    next();
  } else {
    res.redirect('/login');
  }
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
