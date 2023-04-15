/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let stringArray = s.split('');
    for (let x = 0; x <= indices.length - 1; x++){
        stringArray[indices[x]] = s[x];
    }
    return stringArray.join('');
};
