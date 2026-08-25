/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // let set = new Set();
    // let answer = new Set();
    // for(let i=0; i<nums1.length;i++){
    //     set.add(nums1[i])
    // }
    // for(let j=0;j<nums2.length;j++){
    //    if( set.has(nums2[j])){
    //     answer.add(nums2[j])
    //    }
    // }
    // return [...answer]
    let res = [];
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++)
            if(nums1[i] == nums2[j]){
                if(!res.includes(nums1[i])){
                    res.push(nums1[i])
                }
            }
        
    }
    return res
};