/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // store number of good pairs
    let pairs = 0;
    // iterate over nums array
    for (let x = 0; x <= nums.length - 1; x++){
        // iterate over nums starting from x + 1 and check for pairs
        for (let j = x + 1; j <= nums.length - 1; j++){
            if (nums[x] == nums[j]) pairs += 1;
        }
    }
    //return pairs
    return pairs;
};