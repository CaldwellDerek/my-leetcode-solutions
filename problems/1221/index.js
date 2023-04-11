/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let val = 0;
    let result = 0;
    for (let char of s){
        if (char == "L"){
            val += 1;
        } else {
            val -= 1;
        };
        
        if (val == 0){
            result += 1;
        }
    };
    return result;
};