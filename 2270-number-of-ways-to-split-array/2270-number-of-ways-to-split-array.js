/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let totalSum = 0;
    for(let i =0; i<nums.length;i++){
        totalSum = totalSum+nums[i]
    }
    let leftSum = 0;
    let count =0;
    for(let j = 0; j<nums.length-1; j++){
        leftSum = leftSum+nums[j];
        let rightSum = totalSum - leftSum;
        if(leftSum>=rightSum){
            count++;
        }
    }
    return count;
};