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

//sort an array 2 (incomplete)

function compareString(a, b){
	  return a - b;
	  }

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

//3 times
function call3Times(fun) {
  fun();
  fun();
  fun();
}

var hello = function() {
    console.log("hello, world!");
};
call3Times(hello);

//n times (incomplete)

callNTimes(3 , fun);{
    var hello = function() {
        console.log("hello, world!");

    };
    call3Times(hello);
}

//product
var myArr = [6, 22, 7];

var product = myArr.reduce(function(a, b){
    return a * b;
});

//total price(check later *not working*)
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
function total(array){
var total = product.reduce(function(currentValue, product){
    return currentValue + product.price;
});
var sum = array.reduce(combine, 0);
return sum;
}
var answer = total(products);


//str join
var strArr = ['you', 'are', 'always', 'welcome'];

var strList = strArr.reduce(function(sep, strArr){
    if (sep === ''){
        return strArr;
    }
    else{
        return sep + ', ' + strArr;
    }
}, '');
console.log(strList);

//Acronym
function acronym(array){
    var acr = array.reduce(function(firstLetter, name){
        return firstLetter + name[0].toUpperCase();
    }, '');
    console.log(acr);
}
acronym('alcohol', 'tobbacco', 'firearms');


//str multiply(*without spaces*)

function strArray(times, str){       // declares an array strArray
    var arr = [];                    // declare and initialize empty array          that will take the string "digital"
    for(var i = 0; i<times; i++){    // loops through array and pushes word into "arr"
      arr.push(str);
    }
    var newStr =  arr.reduce(function(a,b){ // use the reduce function to out put the sring digital 5 times concatenating it.
      return a+b;
    }, '');
return newStr;
}
console.log(strArray(5, "digital")); // call no of times (5) to output string "digital"

//generate a box
//range function provided by Toby with a for loop
function range(min, max) {
var arr = [];
for (var i = min; i < max; i++) {
arr.push(i);
}
return arr;
}

function box(width, height){
    var harr = range(0,height);
    var warr = range(0,width);

    var blueprint = harr.map(function(a){
        return warr;
    });

    console.log("harr: ",harr);
    console.log("warr: ",warr);
    console.log("blueprint: ",blueprint);
    }

box(4 , 5);

//generate box
//run on python tutor

function range(min, max) {
var arr = [];
for (var i = min; i < max; i++) {
arr.push(i);
}
return arr;
}
// create an array of a string that removes the space between letters and returns the word without spaces
function joinStr(arr, space){
    var strJoin = arr.reduce(function(letterStr, word){
        if (letterStr === '') {
            return word;
        } else {
            return letterStr + space + word;
        }
    }, '');
    return strJoin;
}
//convert to an array of '*'s
//map the string and return a star '*'
function box(width, height){

    var boxWidth = range(0,width);

    var boxHeight = range(0, height);
//return row of '*' s in an array
    var arrStar = boxWidth.map(function(){
        return '*';

    });

    var strStar = joinStr(arrStar, '');
//join the '*' in one array
    var arrBox = boxHeight.map(function(){
        return strStar;
    });
//return the '*' in a new line thus creating a box
    var strBox = joinStr(arrBox, '\n');
    return strBox;
}
console.log(box(4, 4));
