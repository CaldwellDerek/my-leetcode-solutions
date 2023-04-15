/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    for (let x = 0; x <= arr.length - 1; x ++){
        if (fn(arr[x], x)) result.push(arr[x]);
    }
    return result;
};