/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // Container for string array
    let result = [];
    // Loop from 1 to n
    for (let x = 1; x <= n; x++){
        // check for divisions
        if (x % 3 == 0 && x % 5 == 0){
            result.push('FizzBuzz');
        } else if (x % 5 == 0){
            result.push('Buzz');
        } else if (x % 3 == 0){
            result.push('Fizz')
        } else {
            result.push(`${x}`);
        }
    }

    return result;
};