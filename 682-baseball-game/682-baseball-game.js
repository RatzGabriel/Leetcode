/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {

let result=[]

for(let i=0;i<ops.length;i++){
            if(!isNaN(ops[i])){
               result.push(ops[i])
               }
            else if(ops[i]==="+"){                let sum=0;
                sum += parseInt(result[result.length-1])
                sum += parseInt(result[result.length-2])
                result.push(sum)
            }
            else if(ops[i]==="D"){
                let sum=result[result.length-1]*2
                result.push(sum)
            }
            else {
                result.pop()
            }
        }
let sum=result.reduce((acc,sum)=>{
        return parseInt(acc)+parseInt(sum)
    },0)
return sum
};