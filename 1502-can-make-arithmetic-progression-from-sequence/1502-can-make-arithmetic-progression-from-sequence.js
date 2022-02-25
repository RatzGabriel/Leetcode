/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    // 1) Interpret the Prompt
//      arithemtic progression= if diff between
//      any two consecutive elements is same
//      given numbers[] return true if it can be 
//      rearranged to form ari prog. else return false
// 2)

//   I:number[]

//   O:boolean


// 4) High Level Strategys

//      1.iterate over array and check if it is true
//            else reorder it as many times as possible
    //           always check again, if true return true
     //             at the end return false 

//      2. make as many arrays as possible reorders
//          check each array if it is true
    //        at the end return false 

// 6) Implement the solution

let saveArray=[...arr].sort((a,b)=>{
    return a-b
})
let saveArrayB=[...arr].sort((a,b)=>{
    return b-a
})

let checkIfTrue=false;
    
function checkIfConsec(inp){
    let diff=0;
    let check=true;
    if(inp[0]>inp[1])diff=inp[0]-inp[1]
    if(inp[1]>inp[0])diff=inp[1]-inp[0]
    for(let i=0;i<inp.length-1;i++){
        if(inp[i+1]-inp[i]!==diff)return check=false
        }
       return check
    }
  if(checkIfConsec(saveArray)){return true}
    else if(checkIfConsec(saveArrayB)){
        return true
    }
  else return false
    

    

};