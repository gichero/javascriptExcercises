//Hello, you
function hello(name) {
    alert("Hello "+name);
}
hello("Mustache!");

//Hello, you part 2
function hello(name) {
    if (name == null){
        alert("Hello World");
    }
    else{
        alert("Hello "+ name);
    }
}
hello();

// madlib
function madlib (name , subject){
    alert(name + "'s" +" favorite subject in school is " + subject);
}
madlib("Anushka", "history");

//tip calculator
function tipAmount(bill, service){
    var tip;

    if (service === "good"){
        tip = 0.20 * bill;
    }
    else if (service === "fair"){
        tip = 0.15 * bill;
    }
    else{
        tip = 0.10 * bill;
    }
    console.log(tip);
}
tipAmount(65, "fair");

//tip calculator 2
function totalAmount(bill, service){
    var total = tipAmount(bill, service) + bill;
    console.log(total);
}
totalAmount(65, "fair");

//tip calculator 3
function splitAmount(bill, service, people){
    var totalSplit = totalAmount(bill, service)/people;
    console.log(totalSplit);
}
splitAmount(65, "fair", 3);

//print numbers
function printNumbers(){
    for (var i = 1; i <= 10; i++){
        console.log(i);
    }
}
printNumbers();

//print a square 1
function printSquare(num){
for (var i = 1; i <= num; i++) {
     var ouput = "";
     for (var j = 1; j <= num; j++) {
         ouput += "*";
     }
     console.log(ouput);
    }
 }
 printSquare(5);

//print a square 2
function printSquare(num){
    for (var i= 0; i< num; i++){
        console.log("*".repeat(num));
    }
}
printSquare(7);

 //print a box(no * in between box boundary)
 function printBox(width, height){
     for(var i =1; i <=width; i++){
         o = "";
         for(var j= 1; j<=height; j++){
            o += "*";
         }
         console.log(o);
     }
 }
 printBox(6, 4);

 // print a banner1
function printCharInLine(char,times){
    var str = "";
    for(var i=0;i<times;i++){
        str = str + char;
    }
    return str;
}
var str = "digital crafts";
function printBanner(str){
    for(var i = 1; i<= 3; i++){
        if (i === 1 || i === 3){
            console.log ("*" +  printCharInLine("*",str.length) + "*");
        }

        else{
            console.log( "*" +  str + "*");
        }
    }
}
printBanner(str);

//print banner 2
function printBanner(string){
    console.log("*".repeat(string.length + 2));
    console.log("*" + string + "*");
    console.log("*".repeat(string.length + 2));
}
printBanner("YAY! javascript");

//Factor a number
function factors(num){
    var o =[];
     for(var i= 1; i<=num; i++){
         if (num % i === 0){
             o.push(i);
         }
    console.log(o);
     }
 }
 factors(27);
//
// Caesar Cipher
function letterToAscii(letter) {
    return letter.charCodeAt();
}
function asciiToLetter(number) {
    return String.fromCharCode(number);
}
function cipher(string, offset){
    var stringArray = string.split('');
    var newString = '';
    for (var i = 0; i < stringArray.length; i ++) {
        var letter = stringArray[i];
        if (letter === ' ') {
            newString += ' ';
            continue;
        }
        var codeBreak = letterToAscii(letter) + offset;
        if (codeBreak > 122) {
            codeBreak = codeBreak - 26;
        }
        newString += asciiToLetter(codeBreak);
    }
    console.log(newString);
}
// cipher('Genius without education is like silver in the mine', 13);


// Caesar Cipher 2
function decipher(code, offset){
    var stringArray = code.split('');
    var newString = '';
    for (var i = 0; i < stringArray.length; i ++) {
        var letter = stringArray[i].toLowerCase();
        if (letter === ' ') {
            newString += ' ';
            continue;
        }
        var codeBreak = letterToAscii(letter) - offset;
        if (codeBreak < 97) {
            codeBreak = codeBreak + 26;
        }
        newString += asciiToLetter(codeBreak);
    }
    console.log(newString);
}
// decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);


// Leetspeak
function leetspeak(string){
    var leetString = string.toLowerCase();
    var newString = '';
    for (var i = 0; i < leetString.length; i ++) {
        if (leetString[i] === 'a') {
            newString += '4';
        } else if (leetString[i] === 'e'){
            newString += '3';
        } else if (leetString[i] === 'g'){
            newString += '6';
        } else if (leetString[i] === 'i'){
            newString += '1';
        } else if (leetString[i] === 'o'){
            newString += '0';
        } else if (leetString[i] === 's'){
            newString += '5';
        } else if (leetString[i] === 't'){
            newString += '7';
        } else {
            newString += leetString[i];
        }
    }
    console.log(newString);
}
// leetspeak("Leet");


// Long-long Vowels
function longLongVowels(word){
    var wordString = word.toLowerCase();
    var newString = '';
    for (var i = 0; i < (wordString.length); i ++) {
        var stringToCheck = wordString[i] + wordString[i + 1];
        if (stringToCheck === 'oo') {
            newString += 'oooo';
        } else if (stringToCheck === 'ee') {
            newString += 'eeee';
        } else if (stringToCheck === 'aa') {
            newString += 'aaaa';
        } else {
            newString += wordString[i];
        }
    }
    console.log(newString);
}
// longLongVowels('good');
// longLongVowels('cheese');
// longLongVowels('man');


// Sum the Numbers
function sumNumbers(numArray){
    var sum = 0;
    for (var i = 0; i < numArray.length; i ++) {
        sum = numArray[i] + sum;
        return sum;
    }
}
// sumNumbers([1, 4, 8, 14, 33]);


// Just the positives
function positiveNumbers(numArray){
    var positives = [];
    for (var i = 0; i < numArray.length; i ++) {
        if (numArray[i] >= 0) {
            positives.push(numArray[i]);
        }
    }
    console.log(positives);
}
// positiveNumbers([1, -3, 5, -3, 0]);
// positiveNumbers([1, 2, 3]);
// positiveNumbers([-1, -2, -3]);


// Matrix Addition
function matrixAdd(matrix1, matrix2){
    newMatrix = [];
    newMatrix2 = [];
    finalMatrix = [];
    newMatrix.push(matrix1[0][0] + matrix2[0][0]);
    newMatrix.push(matrix1[0][1] + matrix2[0][1]);
    newMatrix2.push(matrix1[1][0] + matrix2[1][0]);
    newMatrix2.push(matrix1[1][1] + matrix2[1][1]);
    finalMatrix.push(newMatrix);
    finalMatrix.push(newMatrix2);
    console.log(finalMatrix);
}
// matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);


// Rock Paper Scissors
function rockPaperScissors(player1, player2) {
    if (player1 === 'rock') {
        if (player2 === 'scissors') {
            console.log('Player 1 wins');
        } else if (player2 === 'paper') {
            console.log('Player 2 wins');
        }
    }
    if (player1 === 'scissors') {
        if (player2 === 'paper') {
            console.log('Player 1 wins');
        } else if (player2 === 'rock') {
            console.log('Player 2 wins');
        }
    }
    if (player1 === 'paper') {
        if (player2 === 'scissors') {
            console.log('Player 1 wins');
        } else if (player2 === 'rock') {
            console.log('Player 1 wins');
        }
    }
    if (player1 === player2) {
        console.log('draw');
    }

}
// rockPaperScissors('rock', 'scissors');
// rockPaperScissors('rock', 'paper');
// rockPaperScissors('paper', 'paper');


// Tic Tac Toe
function ticTacToe(board){
    var winnerFound = false;
    var tacArray = [];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            tacArray.push(board[i][j]);
        }
    }

    for (var k = 1; k < 3; k++) {
        var player;
        if (k === 1) {
            player = 'O';
        } else if (k === 2) {
            player = 'X';
        }
        if (tacArray[0] === player && tacArray[1] === player && tacArray[2] === player || tacArray[3] === player && tacArray[4] === player && tacArray[5] === player || tacArray[6] === player && tacArray[7] === player && tacArray[8] === player || tacArray[0] === player && tacArray[3] === player && tacArray[6] === player || tacArray[1] === player && tacArray[4] === player && tacArray[7] === player || tacArray[2] === player && tacArray[5] === player && tacArray[8] === player || tacArray[0] === player && tacArray[4] === player && tacArray[8] === player || tacArray[2] === player && tacArray[4] === player && tacArray[8] === player) {
            console.log(player);
            winnerFound = true;
        }
    }

    if (winnerFound === false) {
        console.log('null');
    }
}
ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ]);
