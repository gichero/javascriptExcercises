
//Read a file
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('Filename: ', function(file){
    //request file name
    fs.readFile(file,function(err,data){
        // read file
        if(err){
            console.log("error");
            return;
        }
        //error handling process incase there is an error retrieving file
        console.log(data.toString().toUpperCase());
        //file read, content converted to string 'UTF-8', then uppercase

    });
    rl.close();// close rl 
});

// DNS lookup

var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a domain name: ', function(domain){
    dns.lookup(domain, function(err, ipAddress){
        if(err){
            console.log(err.message);
            return;
        }
        console.log(domain + "'s IP address is: " + ipAddress);
        rl.question('Enter a file name: ', function(filename){
            var url = 'http://' + domain;
            request.get(url, function(err, response, html){
                if(err){
                    console.log(err.message);
                    return;
                }
                fs.writeFile(filename, html, function(err){
                    if(err) {
                        console.log(err.message);
                        return;
                    }
                    console.log('Wrote file ' + filename + '.');
                    rl.close();
                });

            });
        });
    });
});
