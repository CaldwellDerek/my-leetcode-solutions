/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let ans = [];

    for (let x = 0; x <= nums.length - 1; x++){
        let leftIndex = x - 1;
        let rightIndex = x + 1;

        let leftSum = 0;
        let rightSum = 0;

        while (leftIndex >= 0){
            leftSum += nums[leftIndex]
            leftIndex -= 1;
        }

        while (rightIndex <= nums.length - 1){
            rightSum += nums[rightIndex];
            rightIndex += 1;
        }

        ans.push(Math.abs(leftSum - rightSum));
    }

    return ans;
};