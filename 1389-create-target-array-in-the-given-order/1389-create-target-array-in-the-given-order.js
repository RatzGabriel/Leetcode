/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
   // 1) Interpret the Prompt
//          create target array 
//              initially target array empty
//              left to right read nums[i] index[i]
//              at targetarray[index[i]] insert nums[i]
//              return target array
// 2)

//   I:nums[] nums[]

// 4) High Level Strategys
//
//      1. iterate nums[] 
//            for nums[i] do:
//             at target[index[i]] put nums[i] between
//

// 6) Implement the solution
    let targetArray=[];
    for(let i=0;i<nums.length;i++){
        targetArray.splice(index[i],0,nums[i])
    }
    return targetArray
};