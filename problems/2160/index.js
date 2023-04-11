/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let stringNum = num.toString();
    let numArray = stringNum.split("").sort();
    let num1 = numArray[0] + numArray[3];
    let num2 = numArray[1] + numArray[2];
    let sum = parseInt(num1) + parseInt(num2);
    return sum;
};