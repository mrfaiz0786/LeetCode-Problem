/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let array = new Array(26).fill(0);
    for(let i=0; i<s.length;i++){
       let index =  s.charCodeAt(i) - 97;
        array[index]++;
    }
    for(let i=0;i<s.length;i++){
         let index =  s.charCodeAt(i) - 97;
        if(array[index]==1){
            return i;
        }
    }
    return -1;
};