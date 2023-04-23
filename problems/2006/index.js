/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;

    for (let x = 0; x < nums.length - 1; x++){
        for (let j = x + 1; j <= nums.length - 1; j++){
            if (Math.abs(nums[x] - nums[j]) == k) count += 1;
        }
    }

    return count;
};