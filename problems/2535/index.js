/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let num of nums) {
        elementSum += num;
    }

    for (let digit of nums.join('').toString()){
        digitSum += parseInt(digit);
    }
    
    return Math.abs(elementSum - digitSum);
};


console.log(differenceOfSum([1,2,3,4]));
// [1, 15, 6, 3]