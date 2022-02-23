/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    // 1) Interpret the Prompt
//     several rounds, past score affects future scores
//    beginning empty record
//    given list of strings[]
//    ops[i] is the ith operation you must apply to record
//     int = record new score of x
//     + = sum of prev 2 scores
//     "D" = new score= double previous score
//     "C" = invalidate the prev score,remove it
//      return sum
// 2)

//   I: string[]

//   O:number

// 4) High Level Strategys

//      1. iterate ops
    //     check if i is int,+,D,C
    //     do task accordingly
    //     return sum 
let result=[]

        for(let i=0;i<ops.length;i++){
            if(!isNaN(ops[i])){
                console.log('num')
               result.push(ops[i])
               }
            else if(ops[i]==="+"){
                console.log('+')
                let sum=0;
                sum += parseInt(result[result.length-1])
                sum += parseInt(result[result.length-2])
                result.push(sum)
            }
            else if(ops[i]==="D"){
                console.log('D')
                let sum=result[result.length-1]*2
                result.push(sum)
            }
            else {
                console.log('C')
                result.pop()
            }
        }
    let sum=result.reduce((acc,sum)=>{
        return parseInt(acc)+parseInt(sum)
    },0)
    return sum
};