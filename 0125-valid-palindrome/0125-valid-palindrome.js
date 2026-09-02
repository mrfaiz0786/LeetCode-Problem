/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    const isAlnum = (ch) => /[a-zA-Z0-9]/.test(ch);

    // let str = "";
    // for(let i=0;i<str.length;i++){
    //     if(str>"A")
    // }

    while (left < right) {
        if (!isAlnum(s[left])) {
            left++
            continue
        }
        if(!isAlnum(s[right])){
            right--
            continue
        }
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
         return false
        }
        left++;
        right--;

    }
    return true;

};