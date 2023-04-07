/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for (let x = 0; x <= nums.length - 1; x++){
        ans.push(nums[nums[x]]);
    }
    return ans;
};