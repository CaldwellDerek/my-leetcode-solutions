/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // create dictionary to store type and num of stones
    let dictionary = {};
    // loop over stones and add them to dictionary
    for (let stone of stones){
        if (dictionary[stone]){
            dictionary[stone] += 1;
        } else {
            dictionary[stone] = 1;
        }
    };
    // store total number of stones that are jewels
    let total = 0;
    // loop over jewels and compare to dictionary
    for (let jewel of jewels){
        // if stone is a jewel, add value to total
        if (dictionary[jewel]){
            total += dictionary[jewel];
        }
    }

    return total;
};