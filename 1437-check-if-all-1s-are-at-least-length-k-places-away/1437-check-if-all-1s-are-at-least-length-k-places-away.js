/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    // 1) Interpret the Prompt
//         given binary array nums and integer k
//          return true if all 1`s are at least k places away from each
//
// 2)

//   I:nums[]

//   O:boolean

//   C:array length

//   E: array not binary

// 4) High Level Strategys

//      1.iterate 
    //     if 1
    //      if last 1 return true
     //      check if next 1 is at least k indices away
      //      if no return false
      //   if last 1 return true

//      2. get all indice difference between 1s
    //     if any of it is < k return false

// 5) PseudoCode
       // for nums i length
       //   if nums[i] ===1
       //     for nums j length 
       //       if nums[j]===1
       //     -1  nums[j]-nums[i] <k return false
        //      if no nums[j] return true
// 6) Implement the solution
    
    for(let i=0;i<nums.length;i++){
           console.log(nums[i])
        if(nums[i]===1){
         
            for(let j=i+1;j<nums.length;j++){
                console.log(i,j)
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