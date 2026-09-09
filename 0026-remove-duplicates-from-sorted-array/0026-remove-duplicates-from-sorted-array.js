/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let i = 0;
    for (j = 0; j < nums.length; j++) {
        if (nums[i] < nums[j]) {
           let temp = nums[i+1]
           nums[i+1] = nums[j]
           nums[j] = temp
           i++
        }
    }
        return i+1


    // let i = 0;

    // for (let j = 0; j < nums.length; j++) {

    //     if (nums[i] < nums[j]) {

    //         // new unique element mila
    //         i++;

    //         nums[i] = nums[j];
    //     }
    // }

    // return i + 1;

};