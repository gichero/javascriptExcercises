// Read and write

// Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.
//
// Example:
//
// $ node cap_file_2.js
// Input file: file1.txt
// Output file: output.txt
// Wrote to file output.txt
// As a result, output.txt should now contain the text HELLO, I AM FILE 1.
//
// Trigger an error by running the program with an non-existing input file, ensure that the error is properly displayed. Trigger an error by running the program with an output file in a non-existant directory, such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});
//prompt user for file name
rl.question('Enter file name: ', function(input) {
  rl.question('Output file name: ', function(output) {
    //read file from inputFile.txt
    fs.readFile(input, function(err, buffer) {
      if (err) {
        console.log(err.message);
        return;
      }
      var data = buffer.toString().toUpperCase();
      //write file from outputFile.txt
      fs.writeFile(output, data, function(err) {
        if (err) {
          console.log(err.message);
          return;
        }
        rl.close(); //rl close
      });
  });
});
});
