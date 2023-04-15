/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = x;
        for (let j = functions.length - 1; j >= 0; j--){
            result = functions[j](result);
        }
        return result;
    }
};