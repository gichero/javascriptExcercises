
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.question('Enter file name: ', function(input) {
  rl.question('Output file name: ', function(output) {
    fs.readFile(input, function(err, buffer) {
      if (err) {
        console.log(err.message);
        return;
      }
      var data = buffer.toString().toUpperCase();
      var reverse = data.split('').reverse().join('');
      fs.writeFile(output, reverse, function(err) {
        if (err) {
          console.log(err.message);
          return;
        }
        rl.close();
      });
  });
});
});
