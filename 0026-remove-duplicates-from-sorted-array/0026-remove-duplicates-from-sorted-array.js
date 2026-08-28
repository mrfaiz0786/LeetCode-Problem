/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {

        if (nums[i] < nums[j]) {

            // new unique element mila
            i++;

            nums[i] = nums[j];
        }
    }

    return i + 1;

};