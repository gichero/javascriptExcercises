// Save a web page
//
// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. For example:
//
// $ node save_web_page.js
// URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
// Save to file: cover-book.html
// Saved to file cover-book.html
// As result cover-book.html should have the HTML source code from the entered URL.
//
// Trigger an error by running the program with an invalid URL, ensure the error is properly displayed. Trigger an erro by running the program with an output file in a non-existent directory ,such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.


var fs = require('fs');
var dns = require('dns');
var request = require('request');
var rl = require('readline');

var rl = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('URL: ', function(domain){
  dns.lookup(domain, function(err,ipAddress){
    if (err){
      console.log(err.message);
      rl.close();
      return;
    }
    else{
      rl.question('Save file here: ', function(filename){
        request.get('http://'+domain, function(err, response, html){
          if (err){
            console.log(err.message);
            rl.close();
            return;
          }
          else{
            fs.writeFile(filename, html, function(err){
              if(err){
                console.log(err.message);
                return;
              }
              else{
                console.log("File written");
                rl.close();
              }
            });
          }
        });
      });
    }
  });
});
