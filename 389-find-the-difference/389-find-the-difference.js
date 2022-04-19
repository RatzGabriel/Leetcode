/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // 1) Interpret the Prompt
//       find the difference between 2 strings
//

// 2)

//   I:string
//
//   O:string

// 4) High Level Strategys

//      1.for s length find s[i] in t and delete it 
//         return leftover

    let a=[...s];
    let b=[...t];
    
    for(let i=0;i<a.length;i++){
        let indexPosition=b.indexOf(a[i]);
        b.splice(indexPosition,1)
    }
    return b.join("")
};