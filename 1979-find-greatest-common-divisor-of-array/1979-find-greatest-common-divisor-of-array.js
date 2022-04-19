/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    // Find greatest common divisor of
    // smallest number and largest number
    // greatest common divisor=largest positive integer that
    // evenly divides both numbers
    // 
    //
    //
    //I num[]
    //O greatest common divisor , number
    //
    // Strategy:
    // find smallest number 
    // find greatest number
    // find greatest divisor for both numbers
    //
    //
    // sort it 
    // a= sort[0]
    // b=sort[last]
    //
    // counting down from b find greatest divisor
    
    let sortedArray=nums.sort((a,b)=>{
        return a-b
    });
    
    let a = sortedArray[0];
    let b= sortedArray[sortedArray.length-1];
    
    for(let i=b;i>0;i--){
        console.log(i)
        if(a%i==0 && b%i===0)return i
    }
    
    
    
};