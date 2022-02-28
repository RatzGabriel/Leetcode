/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {

    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
         
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]===1){
                    if((j-1)-i<k){
                        return false
                    }
                    else i=j
                }
            }
        }
       
    }
    
     return true
};