/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
    let saveNum=num;
    let steps=0;
    while(saveNum>0){
        if(saveNum%2===0){
            saveNum=saveNum/2
            steps+=1
        }
        else{
            saveNum=saveNum-=1
        steps+=1}
    }
    return steps
};