/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let total = 0;
    for (let jewel of jewels){
        for (let stone of stones){
            if (jewel == stone) total += 1;
        }
    }
    return total;
};