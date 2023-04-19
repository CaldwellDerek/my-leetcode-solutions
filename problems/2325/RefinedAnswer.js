/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // Create a variable to store the result
    let result = "";
    // Create a variable to store the alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Create a variable to store the key without any duplicate values or spaces
    let filteredKey = Array.from(new Set(key.split(" ").join("")));
    // Create a dictionary to store key / value pairs from the key and alphabet
    let dict = {};

    // loop over the filtered key and store a key / value pair for each index
    for (let index = 0; index < filteredKey.length; index++){
        dict[filteredKey[index]] = alphabet[index];
    }

    // search dict for values in the message and add characters to result
    for (let char of message){
        result += dict[char] || " ";
    }

    // return result
    return result;
    
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))