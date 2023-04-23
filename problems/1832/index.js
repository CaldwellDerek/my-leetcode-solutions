/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // store each char of sentence in a dictionary
    let dict = {};
    for (let char of sentence){
        dict[char] = char;
    }

    // loop over alphabet and check if dict has each char
    for (let char of "abcdefghijklmnopqrstuvwxyz"){
        if (!dict[char]) return false;
    }

    return true;
};