/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = [];
    for (let x = 0; x < n; x++){
        ans.push(nums[x]);
        ans.push(nums[x + n]);
    };
    return ans;
};