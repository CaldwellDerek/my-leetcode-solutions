/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // Create variable to store the alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Create dictionary to store decoded values
    let dict = {};
    // Create variable to store decoded message
    let result = "";
    // Create variable to store filtered key
    let newKey = ""
    // Create dictionary to store filtered key values
    let keyDict = {};

    // Filter key and store in newKey
    for (let char of key){
        if (!keyDict[char] && char != " ") {
            keyDict[char] = char;
            newKey += char;
        }
    }
    
    // Loop over newKey and store the letter and decoded letter as a key / value pair in dict
    for (let index = 0; index <= newKey.length - 1; index++) {
        let letter = newKey[index];
        let decodedLetter = alphabet[index];

        dict[letter] = decodedLetter;
    }

    // Loop over message and compare values to dict, add value to result
    for (let index2 = 0; index2 <= message.length - 1; index2++) {
        let letter = message[index2]
        if (letter === " "){
            result += " ";
        } else {
            result += dict[letter];
        }
    }

    // Return decoded message
    return result;
    
};