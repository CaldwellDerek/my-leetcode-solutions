/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for (let x = 0; x <= arr.length - 1; x++){
        result.push(fn(arr[x], x))
    }
    return result;
};