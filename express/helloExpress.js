// Hello World
// Make an express program that will display "Hello, world!" at the root URL: /
// Routes
// Add to your program the following pages:

var express = require ('express');
var app = express();

app.get('/', function (req, res){
    res.send('Hello World!');
});

app.get('/cats', function(req, res){
    res.send('Meeeowwww!');
});

app.get('/dogs', function(req, res){
    res.send('Woof!, Woof!');
});

app.get('/cats_and_dogs', function(req, res){
    res.send('Living together');
});

// Route Parameters
// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
//
// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc...

app.get('/greet/:name', function(req, res){
    var name = req.params.name || 'Kennedy';
    res.send('Hello ' +name+ '!');
});

// Query Parameters: Tell the year you were born
// Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:
// /year?age=32 it will display You were born in 1985..

app.get('/year', function(req, res){
    var age = req.query.age || '?';
    var year = new Date().getFullYear() - age;
    res.send('You were born in ' +year);
});

// Templates
// Make the greet page say hello to visitor and tell the year they were born. This time you will use a .hbs file in the viewws folder to render the message using HTML.
// For example, if you go to the URL:
// /greet/Manoush?age=32
// The server should render the html:

app.get('/greet/:name', function(req, res){
    var name = req.params.name;
    var age = req.query.age;
    res.render('helloExpress.hbs', {
        name:  name,
        year: 2017 - age
    });
});

app.listen(3000, function(){
console.log('Example app listening on port 3000');
});
