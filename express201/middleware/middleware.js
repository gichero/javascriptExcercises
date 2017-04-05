const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs-promise');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(function(req, res, next){
    var contents = req.method + ' '+ req.path;
    
    //console.log(req.method, req.path);
    fs.appendFile('login.txt', contents)
    .then(function(){
        next();
    })
    .catch(next);
});


app.get('/login', function(req, res){
    res.render('login.hbs');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
