// npm Exercises
//
// npm init
//
// Create a directory for today's work. Run npm init within it to create a package.json file within it. For the rest of these exercises, you will install modules using the --save option, so that the dependency will be remembered in your package.json file. After each time you install a module, check your package.json and see that what you installed has been added as a dependency.
//
// Create a .gitignore file, and within it, put node_modules, so that git will ignore the node_modules folder when you are adding files to be tracked.
//
// Use the marked module
//
// Install the marked module, require it, and use the module to convert some hard-coded markdown to HTML, you may use the example code provided in marked's project page.
//
// Lodash
//
// Lodash is a swiss army knife toolbelt of a module. For example, there's a shuffle built in, and if you had known that, you could have used it for black jack and memory game.
//
// Write a simple program that makes use of lodash's shuffle function.
// Write a simple program that makes use of lodash's sum, max, or mean function.
// Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.
// Bonus: Request and Cheerio
//
// Request and Cheerio are two useful modules and they can be combined to do some really cool stuff.
//
// Figure out how to use both of these modules individually.
// Use the modules together to grab the list of "packages people 'npm install' a lot" on the npmjs.org front page, store the results in an array, and print it out to the terminal.
// Bonus 2: Any module
//
// Find any npm module and learn how to use it by reading its documentation. You can do a google search for something you might be interested in and add "npm" to the search term. Or you can look through this list for some inspiration.



// var marked = require('marked');
//
//
// console.log(marked('I am using __markdown__!'));

var _ = require('lodash');

var myArr = [34, 35, 36, 37, 38, 39];

console.log(_.shuffle(myArr));
console.log(_.sum(myArr));
console.log(_.max(myArr));
console.log(_.mean(myArr));
