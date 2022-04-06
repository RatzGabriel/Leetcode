/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let resultArray=[]
    let i=0;
    while(i<nums.length){
        i++
        for(let j=0;j<nums.length;j++){
            if(nums[j]===i){
             break   
            }
            if(j===nums.length-1){                
                resultArray.push(i)} 
        }
    }
    return resultArray
};