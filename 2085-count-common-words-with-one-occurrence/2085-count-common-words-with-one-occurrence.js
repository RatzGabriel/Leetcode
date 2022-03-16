/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let uniqueArray1=words1.reduce((acc,sum)=>{
        if(acc[sum]===undefined){
        acc[sum]=1
        return acc
    }
        else {
            acc[sum]+=1
            return acc
        }
    },{})
    
    
       let uniqueArray2=words2.reduce((acc,sum)=>{
        if(acc[sum]===undefined){
        acc[sum]=1
        return acc
    }
        else {
            acc[sum]+=1
            return acc
        }
    },{})
       let count=0;
  
   for(let key in uniqueArray1){
       if(uniqueArray1[key]===1){
           for(let key2 in uniqueArray2){
               if(key===key2){
                   if(uniqueArray2[key]===1){
                       count++
                   }
               }
           }
       }
   }
   
   
return count
 
   
};