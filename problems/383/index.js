var canConstruct = function(ransomNote, magazine) {
    // iterate over ransomNote to check each character against magazine
    for (let x = 0; x <= ransomNote.length - 1; x++) {
        // store value of char at index
        let ransomChar = ransomNote[x];
        // store index value of found magazine pair
        let index = -1;
        // iterate over magazine to check if it contains char
        for (let j = 0; j <= magazine.length - 1; j++){
            if (magazine[j] == ransomChar){
                index = j;
            }
        }
        // if index = -1 return false
        if (index == -1){
            return false
        } else {
            // removes char at index from magazine string
            magazine = magazine.substring(0, index) + magazine.substring(index + 1, magazine.length);
            console.log(magazine);
        }
    }
    // returns true if first loop is successful
    return true;
};

