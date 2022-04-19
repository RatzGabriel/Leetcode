/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    

    let sortedArray=nums.sort((a,b)=>{
        return a-b
    });
    
    let a = sortedArray[0];
    let b= sortedArray[sortedArray.length-1];
    
    for(let i=b;i>0;i--){
        if(a%i==0 && b%i===0)return i
    }
    
    
    
};