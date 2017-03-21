//Nested Callbacks 1
// function square(num, callBack){
//     var result = num * num;
//     callBack(result);
// }
//
// var callMeback = function callMeBack(result) {
//   console.log('result is: ', result);
//   };
//   square(5, callMeback);
//
// //Nested Callbacks 2
// function square(num, callBack){
//     var result = num * num;
//     callBack(result);
// }
//
// function add(x, y, callback){
//     var result = x + y;
//     callback(result);
// }
//
//  var x = 4;
//  var y = 3;
//
// square(x, function(x2){
//     square(y, function(y2){
//         add(x2, y2, function(result){
//             console.log(result);
//         });
//     });
// });

//Nested callbacks 3
var x = 4;
var y = 3;

function square(num, callBack){
    setTimeout(function(){
    var sqNum = num * num;
    callBack(sqNum);
}, 1000);
}

function squareRoot(num, callBack){
    setTimeout(function(){
    var sqRoot = Math.sqrt(num);
    callBack(sqRoot);
}, 1000);
}

square(x, function(xSquare){
    console.log(xSquare);
   square(y, function(ySquare){
       console.log(ySquare);
       var sum = xSquare + ySquare;
       squareRoot(sum, function(sqRoot){
           console.log(sqRoot);
       });
   });
});
