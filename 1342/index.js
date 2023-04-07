/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    // stores value of num
    let number = num;
    // keeps track of steps
    let steps = 0;
    // loops until num == 0
    while (number > 0){
        // checks if number is even
        if (number % 2 == 0){
            // divides number by 2
            number = number / 2
            // increases step count by 1
            steps += 1;
        } else {
            // subtracts 1 from number
            number -= 1;
            // increases step count by 1
            steps +=1;
        }
    }

    //returns steps
    return steps;
};