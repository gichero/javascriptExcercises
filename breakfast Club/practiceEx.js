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

words.map(function(word){
    return word.map(split);

  vowels.filter(function(vowel, word){
    if ((vowel.match)=== word){s
        return count ++;

      }
      console.log(count);

    });

  });



  //problem solving(reverse words)

  // var str = 'There is a ball in the tree can you get it';
  // console.log(str.split(''). reverse().join('').split(' ').reverse().join(' '));

  const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

var str = 'bananas';
var vowels = 'aeiou';


var count = str.filter(function(vowels){
    if (str.split === vowel){
        count +=1;

    }
    console.log(count);
});
