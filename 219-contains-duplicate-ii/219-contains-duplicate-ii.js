/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
        for(let i=0;i<nums.length;i++){
           for(let j=i+1;j<nums.length;j++){
               if(nums[j]===nums[i]){
                  if(j-i<=k) return true
               }
           }
              
        }
    return false
};