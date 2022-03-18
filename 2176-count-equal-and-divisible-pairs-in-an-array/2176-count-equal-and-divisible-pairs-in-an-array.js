/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {

    let count=0;
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(i!==j){
            if(nums[i]===nums[j]){
                if(0<=i<j<nums.length){
                    if((i*j)%k===0){
                        console.log('it is',i,j,(i*j)%k===0,nums[i],nums[j])
                        count++
                    }
                }
            }
        }}
    }
    
    return count
    
    
};