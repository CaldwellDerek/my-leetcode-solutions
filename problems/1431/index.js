/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = 0;
    let ans = [];

    for (let amt of candies){
        if (amt > mostCandies) mostCandies = amt;
    }

    for (let kid of candies){
        kid + extraCandies >= mostCandies ? ans.push(true) : ans.push(false);
    }

    return ans;
};