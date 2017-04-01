var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var connect = require('./access');
var res = [];

var db = pgp(connect);

prompt('artist name: ')
.then(function artistName(val){
    res.push(val);

    console.log(res);

})
.catch(function(err){
    console.log(err.message);
});
