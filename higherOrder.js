// // positive numbers
//
// var arr = [-3, -5, 76, 33, 2];
//
// var positives = arr.filter(function(n){
//     return n > 0;
// });
// //
// // //even numbers
// var myArr = [1, 65, 5, 42, 8, 103, 46, 234, 21, 874];
//
// var positives = myArr.filter(function(n){
//     return n % 2 === 0;
// });
// //
// // // square the numbers
// var myArr = [6, 75, 9, 33, 23];
// var squared = myArr.map(function(n){
//     return n*n;
// });
//
// //cities 1
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var temp = cities.filter(function(city){
//     return city.temperature < 70;
// });
//
// //cities 2
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//  var cityNames = cities.map(function(city){
//      return city.name;
//  });

 //good job
 var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
var goodJob = function(person){
    console.log('Good Job, '+person+'!');
};
people.forEach(goodJob);

//sort an array
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
people.sort();
console.log(people);

//sort an array 2

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
people.sort();
console.log(people);
