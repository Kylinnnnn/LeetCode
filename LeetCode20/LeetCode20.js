/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    var string_stack = new Array();
    var string_arr = s.split('');
    return string_arr.every((v, i) => {
        if (left.indexOf(v) != -1) {
            string_stack.push(v);
        }
        else if (left.indexOf(string_stack.pop()) != right.indexOf(v)) {
            return false;
        }
        if (i == string_arr.length - 1 && string_stack.length != 0) {
            return false;
        }
        return true;
    })
};