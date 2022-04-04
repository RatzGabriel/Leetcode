/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    if(nums.length===1)return[0]
    const resultArray=[];
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
        if(Math.abs((i-j))<=k && nums[j]===key){
            resultArray.push(i);
            break;
        }
        }
    }
    return resultArray
};