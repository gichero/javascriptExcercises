// Hello, you
// function hello(name) {
//     alert("Hello "+name);
// }
// hello("Mustache!");

// Hello, you part 2
// function hello(name) {
//     if (name == null){
//         alert("Hello World");
//     }
//     else{
//         alert("Hello "+ name);
//     }
// }
// hello();

// madlib
// function madlib (name , subject){
//     alert(name + "'s" +" favorite subject in school is " + subject);
// }
// madlib("Anushka", "history");

//tip calculator
// function tipAmount(bill, service){
//     var tip;
//
//     if (service === "good"){
//         tip = 0.20 * bill;
//     }
//     else if (service === "fair"){
//         tip = 0.15 * bill;
//     }
//     else{
//         tip = 0.10 * bill;
//     }
//     console.log(tip);
// }
// tipAmount(65, "fair");

//tip calculator 2
// function totalAmount(bill, service){
//     var total = tipAmount(bill, service) + bill;
//     console.log(total);
// }
// totalAmount(65, "fair");

// tip calculator 3
// function splitAmount(bill, service, people){
//     var totalSplit = totalAmount(bill, service)/people;
//     console.log(totalSplit);
// }
// splitAmount(65, "fair", 3);

//print numbers
// function printNumbers(){
//     for (var i = 1; i <= 10; i++){
//         console.log(i);
//     }
// }
// printNumbers();

//print a square 1
// function printSquare(num){
// for (var i = 1; i <= num; i++) {
//      var ouput = "";
//      for (var j = 1; j <= num; j++) {
//          ouput += "*";
//      }
//      console.log(ouput);
//     }
//  }
//  printSquare(5);

//print a square 2
// function printSquare(num){
//     for (var i= 0; i< num; i++){
//         console.log("*".repeat(num));
//     }
// }
// printSquare(7);

 //print a box(no * in between box boundary)
 // function printBox(width, height){
 //     for(var i =1; i <=width; i++){
 //         o = "";
 //         for(var j= 1; j<=height; j++){
 //            o += "*";
 //         }
 //         console.log(o);
 //     }
 // }
 // printBox(6, 4);

 // print a banner1
// function printCharInLine(char,times){
//     var str = "";
//     for(var i=0;i<times;i++){
//         str = str + char;
//     }
//     return str;
// }
// var str = "digital crafts";
// function printBanner(str){
//     for(var i = 1; i<= 3; i++){
//         if (i === 1 || i === 3){
//             console.log ("*" +  printCharInLine("*",str.length) + "*");
//         }
//
//         else{
//             console.log( "*" +  str + "*");
//         }
//     }
// }
// printBanner(str);

//print banner 2
// function printBanner(string){
//     console.log("*".repeat(string.length + 2));
//     console.log("*" + string + "*");
//     console.log("*".repeat(string.length + 2));
// }
// printBanner("YAY! javascript");

// Factor a number
// function factors(num){
//     var o =[];
//      for(var i= 1; i<=num; i++){
//          if (num % i === 0){
//              o.push(i);
//          }
//     console.log(o);
//      }
//  }
//  factors(27);

//caesar cipher
