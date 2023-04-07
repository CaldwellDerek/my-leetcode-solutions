var getConcatenation = function(nums) {
    let ans = [];
    while (ans.length < nums.length * 2){
        for(let num of nums){
            ans.push(num);
        }
    }
    return ans;
};

console.log(getConcatenation([1,2,3]));