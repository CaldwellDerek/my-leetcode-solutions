/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = -1;
    return function() {
        counter += 1;
        return n + counter;
    };
};
