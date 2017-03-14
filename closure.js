//counter
// function counter(){
//     var count = 0;
//     function countActually(){
//         count++;
//         return count;
//     }
//     return countActually;
// }
// var count = counter();
// console.log(count());
// console.log(count());
// console.log(count());
//
//
// //counter2
// function counter(){
//     var count = 4;
//     function countActually(){
//         count++;
//         return count;
//     }
//     return countActually;
//     }
// var count = counter();
// console.log(count());
// console.log(count());
// console.log(count());
//
//     //counter3
//
// function counter(){
//     var count = 4;
//     function increment(){
//         count++;
//         return count;
//     }
//     function decrement(){
//         count--;
//         return count;
//     }
//     return{
//         increment: increment,
//         decrement: decrement
//     };
//     }
//
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.decrement());
//

    //battleship
    //check the slides on closure for clarity (caesar cipher example)
var myFire = function() {
        var board = [
      ['o', ' ', 'o', 'o', ' '],
      ['o', ' ', ' ', ' ', ' '],
      ['o', ' ', 'o', 'o', 'o'],
      ['o', ' ', ' ', ' ', ' '],
      [' ', ' ', 'o', ' ', 'o'],
      [' ', ' ', 'o', ' ', 'o']
    ];
    function fire(row, col) {
      if (board[row][col] === 'o') {
        board[row][col] = 'x';
        return 'Hit!';
      } else {
        return 'Miss';
      }
    }
    return fire;
}();
console.log(myFire(3, 8));
//if I include brackets after myFire in the top statement and remove the brackets in the closing function. I get the same result.
