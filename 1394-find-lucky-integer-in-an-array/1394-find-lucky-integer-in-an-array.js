/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
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
            }}}
    return count;
};