//Nested Callbacks 1
function square(num, callBack){
    var result = num * num;
    callBack(result);
}

var callMeback = function callMeBack(result) {
  console.log('result is: ', result);
  };
  square(5, callMeback);

//Nested Callbacks 2
function square(num, callBack){
    var result = num * num;
    callBack(result);
}

function add(x, y, callback){
    var result = x + y;
    callback(result);
}

 var x = 4;
 var y = 3;

square(x, function(x2){
    square(y, function(y2){
        add(x2, y2, function(result){
            console.log(result);
        });
    });
});

//Nested callbacks 3

function square(num, callBack){
    var result = num * num;
    callBack(result);
}

function squareRoot(num, callBack){
    var root = Math.sqrt(num);
    callBack(root);
}

function add(x, y, callback){
    var result = x + y;
    callback(result);
}

var x = 16;
var y = 9;

square(x, function(x2){
   square(y, function(y2){
       squareRoot(x, function(x){
           squareRoot(y,function(y){
               console.log(root);
       add(x2, y2, function(result){
           console.log(result);
           });
           });
       });
   });
});
