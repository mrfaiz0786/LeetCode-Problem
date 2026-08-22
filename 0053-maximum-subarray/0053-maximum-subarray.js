/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let csum = 0;
    let msum = -Infinity;
    for(let i=0; i<nums.length;i++){
        csum = Math.max(nums[i],csum+nums[i])
        msum = Math.max(csum,msum)
    }
    return msum
};