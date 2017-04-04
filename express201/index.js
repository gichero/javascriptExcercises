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

app.get('/', function(req,res){
    res.render('search.hbs');

    });

app.get('/search',function(req,res){
    let term = req.query.search;
    console.log('Term', term);
    db.any(`select * from restaurant where restaurant.name ilike '%${term}%'`)
    .then(function(resultsArray){
        console.log('results', resultsArray);
        res.render('search_results.hbs', {
            results: resultsArray
        });

    })
    .catch(function(err){
        console.log(err.message);
    });
});

app.get('/restaurant/:id', function(req, res){
    let term2 = req.query.search;
    console.log('Term2', term);
    db.one(`select * from restaurant where restaurant.id ilike '%${term2}%'`)
})
.then(function(resultsArray){
    console.log('results', resultsArray);
    res.render('restaurant.hbs', {
        results: resultsArray
        });

    })
.catch(function(err){
    console.log(err.message);
    });

});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
