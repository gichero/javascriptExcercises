//last letter
// var words = [
//   'bananas',
//   'jewel',
//   'cat'
// ];
// var words2 = [
//   'bananas',
//   'jewel',
//   'cat',
//   'dog'
// ];
//   function lastLetters(arrgeneric){
//     var result = arrgeneric.map(function(word){
//       return word.charAt(word.length -1);
//       });
//   console.log(result);
//     }
//     lastLetters(words);
//     lastLetters(words2);


//vowel counts
    var words = [
  'bananas',
  'jewel',
  'cat'
];
var count = [];

var vowels = ['a', 'e', 'i', 'o', 'u'];

words.forEach(function(word){

  vowels.filter(function(vowel, word){
    if ((word.match)== vowel){
        return count += 1;
      }

    });

  });



  //problem solving(reverse words)

  // var str = 'There is a ball in the tree can you get it';
  // console.log(str.split(''). reverse().join('').split(' ').reverse().join(' '));
