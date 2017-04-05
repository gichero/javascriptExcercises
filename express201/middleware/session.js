const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs-promise');
const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'qwertycat',
    cookie: {
        maxAge: 6000
    }
}));

// Make session automatically available to all hbs files
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

app.get('/', function(req, res){
    res.render('intro.hbs');
})

app.get('/ask', function(req, res){
    res.render('form.hbs');
});

app.post('/submit_name', function(req, res){
    req.session.name = req.body.your_name;
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
