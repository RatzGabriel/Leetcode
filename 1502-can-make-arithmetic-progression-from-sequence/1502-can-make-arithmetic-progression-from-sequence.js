/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {

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