/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
if(s.length===1)return 1
if(s.length===0)return 0
    let max=0;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            console.log('new run')
            if(s[j]===s[i]){
                console.log('run1')
                if((j-i)+1>max){
                console.log('run2')
                max=(j-i)+1
            }
                continue
            }else {
                console.log('break')
                break}
        }
    }
    
    
    
    
return max
};