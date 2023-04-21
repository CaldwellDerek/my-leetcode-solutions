/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let wordArray = s.split(" ");
    let sortedArray = [];
    let order = 1;

    while (order <= wordArray.length){
        for (let word of wordArray) {
            if (word.includes(order)) sortedArray.push(word.slice(0, -1));
        }
        order += 1;
    }

    return sortedArray.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));