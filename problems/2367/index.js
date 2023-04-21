/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let result = 0;
    for (let x = 1; x < nums.length; x++) {
        let k = x - 1;
        while(k >= 0){
            for (let j = x + 1; j < nums.length; j++){
                if (nums[x] - nums[k] == diff && nums[j] - nums[x] == diff){
                    result += 1;
                }
            }
            k -= 1;
        }
    }
    return result;
};

