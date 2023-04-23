/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let truncate = [];

    for (let x = 0; x <= k - 1; x++){
        truncate.push(s.split(" ")[x]);
    }

    return truncate.join(" ");
};

// OR

var truncateSentence = function(s, k) {
    return s.split(" ", k).join(" ");
};