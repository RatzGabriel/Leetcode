/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 1) Interpret the Prompt
// if every element is distinct return false else return true
//

// 2)

//   I:array

//   O:boolean

//   C:

//   E:nums Array empty

// 3) Write Tests

//

// 4) High Level Strategys

//      1. check for every element if there is a similar element
//          if yes take the next element
//              @end return false
//          if no return true



// 5) PseudoCode
    //      iterate array
    //          check every element for doppelganger
    //             if doppelganger return true 
    //             if no doppelganger continue
    //             if end of length return false
// 6) Implement the solution
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(i!==j){
                    if(nums[i]===nums[j])return true          
                }
            }
            if(i===nums.length){
                return false
            }
        }
    return false
};