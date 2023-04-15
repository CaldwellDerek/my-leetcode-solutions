/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for (let x = 0; x <= nums.length - 1; x++){
        if (x == 0) {
            result = fn(result, nums[x]);
        } else {
            result = fn(result, nums[x]); 
        }
    }
    return result;
};