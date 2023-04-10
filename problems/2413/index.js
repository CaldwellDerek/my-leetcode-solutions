/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let multiple = 1;
    while (true){
        let val = n * multiple;
        if (val % 2 == 0){
            return val;
        }
        multiple += 1;
    }
};