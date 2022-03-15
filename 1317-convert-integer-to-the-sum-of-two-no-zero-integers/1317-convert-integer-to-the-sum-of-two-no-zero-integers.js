/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    // 1) Interpret the Prompt
//      find a solution where a+b=n 
//      a and b should not contain any 0

// 2)

//   I:n

//   O:array

//   C: a and b should not contain any 0


// 4) High Level Strategys

//      1. iterate a for 10000
    //     iterate b for 10000
    //      if a+b=n return [a,b]
    //      if a+b >n return
    


// 5) PseudoCode
let regexZero=/([0])/g
// 6) Implement the solution
    for(let i=0;i<10000;i++){
        for(let j=0;j<10000;j++){
            if(i.toString().match(regexZero)||j.toString().match(regexZero))continue
            if(i+j===n)return [i,j]
            if(i+j>n)break
        }
    }
};