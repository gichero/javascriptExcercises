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
