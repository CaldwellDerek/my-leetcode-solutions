/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for (let sentence of sentences){
        let wordArray = sentence.split(" ");
        if (wordArray.length > maxWords){
            maxWords = wordArray.length;
        }
    }
    return maxWords;
};