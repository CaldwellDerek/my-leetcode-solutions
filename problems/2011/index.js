/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    for (let op of operations){
        op == "++X" || op == "X++" ? result += 1 : result -= 1;
    }
    return result;
};