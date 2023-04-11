/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let ans = '';
    for (let x = 0; x <= command.length - 1; x++){
        if (command[x] == '(' && command[x + 1] == ')'){
            ans += 'o';
        } else if (command[x] == '(' && command[x + 1] == 'a') {
            ans += 'al';
        } else if (command[x] == ')' || command[x] == 'a' || command[x] == 'l') {
            ans += '';
        } else {
            ans += command[x];
        }
    }
    return ans;
};