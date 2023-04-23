/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let result = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newAlpha = alphabet.slice(alphabet.indexOf([s[0]]), alphabet.indexOf([s[3]]) + 1);

    for(let char of newAlpha){
        let count = parseInt(s[1]);
        while (count <= parseInt(s[4])){
            result.push(char + count.toString());
            count++;
        }
    }

    return result;
};

