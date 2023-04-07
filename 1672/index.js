/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let most = 0;
    for (let account of accounts){
        let accountTotal = 0;
        for (let value of account){
            accountTotal += value;
        }
        if (accountTotal > most){
            most = accountTotal;
        } 
    }
    return most; 
};