/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {

    // 1) Interpret the Prompt
//      find pairs that meet conditions:
//        0 <=i < j < n
//        nums[i]==nums[j]
//        i/j%k
//
// 2)

//   I:nums[] , nums

//   O:number

//   C:

//   E:

// 3) Write Tests

//

// 4) High Level Strategys

//      1.iterate array and check if a pair meets conditions

//      2.

// 5) PseudoCode
    //       create count var
    //       iterate array
    //         iterate array
    //           if nums[i]===nums[j]
    //            if  0 <=i < j < n
    //              if i*j%k===0
    //                count++

// 6) Implement the solution
    
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