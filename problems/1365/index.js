/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    for (let x = 0; x <= nums.length - 1; x++){
        let smallerCount = 0;
        for (let j = 0; j <= nums.length - 1; j++){
            if (nums[x] != nums[j] && nums[x] > nums[j]){
                smallerCount += 1;
            }
        }
        ans.push(smallerCount);
    }
    return ans;
};