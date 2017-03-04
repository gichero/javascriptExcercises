//Exercise 1
// var phonebookDict = {
//     Alice: '703-493-1834',
//     Bob: '857-384-1234',
//     Elizabeth: '484-584-2923'
// };
// //console.log(phonebookDict.Elizabeth);
// phonebookDict.Kareem = '938-489-1234';
// delete phonebookDict.Alice;
// phonebookDict.Bob = '968-345-2345';
//
// for (var entry in phonebookDict){
//     var people = phonebookDict[entry];
//     console.log(entry + ': ' + people);
// }

//Letter Histogram
function letterHistogram(str){
    var dict = { };

    for (var i= 0; i< str.length; i++) {

        var letter = str[i];
        if (dict[letter] === undefined){
            dict[letter] = 1;
        }
        else{
            dict[letter]+=1;
        }
    }
    return dict;
}
console.log(letterHistogram('innovation'));

// Word Histogram
function wordHistogram(word){
    var wordDict = { };

    var wordArray =[];
    wordArray = word.split(" ");

    for (var i = 0; i < wordArray.length; i++){
        var wrd = wordArray[i];

        if (wordDict[wrd] === undefined){
            wordDict[wrd] = 1;
        }
        else{
            wordDict[wrd] +=1;
        }
    }
    return wordDict;
}
console.log(wordHistogram("to be or not to be"));

// Bonus
// Print the top 2 most frequently used letters in the string.
function wordHistogram(string){
    var wordArray = string.split(' ');
    var wordDict = {};
    for (var i = 0; i < wordArray.length; i ++) {
        var word = wordArray[i];
        if ( !(word in wordDict) ) {
            wordDict[word] = 1;
        } else {
            wordDict[word] += 1;
        }
    }
    var sorted_array = [];
    // Add each word and count pair as an array within sorted_array
    for (var word_ in wordDict) {
        // This returns an array with all the pairs
        sorted_array.push( [word_, wordDict[word_]] );
    }
    // This method sorts the array with largest count first
    sorted_array.sort(function(word, count) {
        return count[1] - word[1];
    });
    console.log('The most used word is: ' + sorted_array[0][0]);
    console.log('The most used word is: ' + sorted_array[1][0]);
}

wordHistogram('to be or not to be or or or to');
