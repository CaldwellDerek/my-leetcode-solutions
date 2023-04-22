/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // Create variables to store words from arrays word1 and word2
    let stringWord1 = word1.join("");
    let stringWord2 = word2.join("");

    // compare variables and return result
    return stringWord1 === stringWord2 ? true : false;
};
