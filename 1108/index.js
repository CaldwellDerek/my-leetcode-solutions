/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defang = ""
    for (let char of address){
        char == "." ? defang += "[.]" : defang += char;
    }
    return defang;
};