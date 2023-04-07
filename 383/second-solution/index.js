/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dictionary = {};

    for (let x = 0; x <= magazine.length - 1; x++){
        const char = magazine[x];

        if (dictionary[char]){
            dictionary[char] += 1;
        } else {
            dictionary[char] = 1;
        }
    }

    for (let j = 0; j <= ransomNote.length - 1; j++){
        const char = ransomNote[j];

        if (dictionary[char]){
            dictionary[char] -= 1;
            console.log(dictionary);
        } else {
            return false;
        }
    }
    
    return true;
};

console.log(canConstruct("aa", "ab"));