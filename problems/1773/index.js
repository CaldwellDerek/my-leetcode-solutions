/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    // Create variable to store result
    let result = 0;
    // Create variable to store index
    let index;
    // check for ruleKey and save index i.e. ruleKey = "type" index of each item type = 0
    switch (ruleKey){
        case "type":
            index = 0;
            break;
        case "color":
            index = 1;
            break;
        case "name":
            index = 2;
            break;
    }

    // loop over items and check if items[index] = ruleValue
    for (let item of items){
        if (item[index] == ruleValue) result += 1;
    }

    // return result
    return result;
};