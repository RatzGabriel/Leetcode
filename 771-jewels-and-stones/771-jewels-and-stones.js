/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result=0;
    for(let i=0;i<stones.length;i++){
        
        
        console.log('1')
        for(let j=0;j<jewels.length;j++){
            console.log('2')
            if(stones[i]===jewels[j]){
                result+=1
            }
        }
    }
    return result
};