/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // let str = x.toString();
    //  return str === str.split('').reverse().join('')
    x = x.toString();
    let left = 0;
    let right = x.length - 1;
    while (left < right) {
        if (x[left] != x[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};