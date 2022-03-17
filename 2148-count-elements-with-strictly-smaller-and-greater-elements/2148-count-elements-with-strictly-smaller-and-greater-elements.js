/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let count=0;
   let numsSorted=nums.sort((a,b)=>{
       return a-b
   })
   for(let i=0;i<nums.length;i++){
       if(nums[i]>numsSorted[0]&&nums[i]<numsSorted[numsSorted.length-1]){
           count++
       }
           
   }
 return count
};