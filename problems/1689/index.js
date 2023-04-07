/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let num = 0;
    for (let char of n) {
        if (parseInt(char) > num) num = parseInt(char);
    };
    return num;
};