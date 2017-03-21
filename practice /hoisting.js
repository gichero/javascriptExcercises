

// Problem 3
// var counter = 0;
//
// function updateCounter() {
//   var counter;
//   // counter here is undefined, the variable is delcared but there is no value, so you cannot add 1 to nothing
//   counter += 1;
//   console.log('The global count is', counter);
//   // counter now has a value of 0
//   counter = 0;
//   console.log('The local count is reset to', counter);
// }
// updateCounter();
// updateCounter();
// updateCounter();


// Problem 2
// var counter = 0;
//
// function hello() {
//   console.log('Hello, world!');
//   // no var keyword so hosting does not happen, counter is using global variable counter.
//   counter = counter + 1;
// }
// hello();
// hello();
// console.log('Called hello', counter, 'times.');


// Problem 4
// console.log(a, f); // a = undefined, f = function f; rest not defined;
var a = 0;
// console.log(a, f); // a = 0; f = function f; rest not defined;
function f(c) {
 // console.log(a, b, c, f, g); // a = 0; b = undefined; c = 2; f = function f; g = function g; d and e aret not defined
 var b = 1;
 // console.log(a, b, c, f, g); // a = 0; b = 1; c = 2; f = function f; g = function g; d and e aret not defined
 function g(d) {
   // console.log(a, b, c, d, e, f, g); // a = 0; b = 1; c = 2; d = 3; e = undefined; f = function f; g = function g;
   var e = 4;
   // console.log(a, b, c, d, e, f, g); // a = 0; b = 1; c = 2; d = 3; e = 4; f = funciton f; g = function g;
 }
 // console.log(a, b, c, f, g); // a = 0; b = 1; c = 2; d = not defined; e = not defined; f = function f; g = function g;
 return g;
 // console.log(a, b, c, f, g); // a = 0; b = 1; c = 2; d = not defined; e = not defined; f = function f; g = function g;
}
// console.log(a, f); // console.log(a, f); // a = 0; f = function f; rest not defined;
f(2)(3);
// console.log(a, f); // console.log(a, f); // a = 0; f = function f; rest not defined;
