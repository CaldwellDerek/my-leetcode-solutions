/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let ans = [];
    for (let x = 0; x <= index.length - 1; x++){
        ans.splice(index[x], 0, nums[x]);
    }
    return ans;
};