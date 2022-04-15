/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    // 1) Interpret the Prompt
// Given num[]
// lucky integer=int that has frequency equal to value
// return largest lucky int || -1

// 2)

//   I:num[]

//

//   O:num

//   C:

//   E:

// 3) Write Tests
//    [2,3,4,5,3,3]   3
//

// 4) High Level Strategys

//      1.
//        let count=-1;
//        iterate
//        if count of i === arr[i] & arr[i]>count count=arr[i]
//        return count


let count=-1;
    let b={}
    for(let i=0;i<arr.length;i++){
        
        let a=1;
        for(let j=i+1;j<arr.length;j++){
            if(b[arr[i]]===1){
                continue
            }
            if(arr[j]===arr[i]){
                a++
            }
            if(j===arr.length-1){
                if(a===arr[i]){
                    if(a>count)count=a
                }
                b[arr[i]]=1;
            a=1;    
            }
            
        }
    }
    
    return count;
    
    
    
    
    
    
    
};