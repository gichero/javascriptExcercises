var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var connect = require('./access');
var res = [];

var db = pgp(connect);

prompt('Track name: ')
.then(function trackName(val){
    res.push(val);
    console.log(res);
    return prompt('album Id: ');
})
.then(function albumId(val){
    res.push(val);
    console.log(res);
    return prompt('track duration: ');
})
.catch (function(err){
    console.log(err.message);
});
