/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count=0;
    if(ruleKey==="color"){
        console.log('1',count)
        for(let i=0;i<items.length;i++){
           
                if(items[i][1]===ruleValue){
                    count+=1
                
            }
        }
        
    }
    if(ruleKey==="type"){
       
        for(let i=0;i<items.length;i++){
           
                if(items[i][0]===ruleValue){
                    console.log('2',items[i])
                    count+=1
                
            }
        }
    }
    if(ruleKey==="name"){
        console.log('3',count)
        for(let i=0;i<items.length;i++){
         
                if(items[i][2]===ruleValue){
                    count+=1
                
            }
        }
    }
    return count
};