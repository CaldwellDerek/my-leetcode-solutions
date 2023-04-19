/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    // create an array that stores each digit of the number at a seperate index
    let numArray = num.toString().split('');
    // create a variable to store the number of digits the number can be evenly divided by
    let result = 0;

    // iterate over numArray, convert to integer, check if num is evenly divisible by the digit
    for (let int of numArray) {
        if (num % parseInt(int) == 0) result += 1;
    }

    // return result of loop
    return result;
};