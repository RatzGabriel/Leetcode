/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let allIdsArray=[];
    let finishedArray=[]
    
    
    for(let i=0;i<items.length;i++){
        
        allIdsArray.push(items[i][0])
    }
   
   let filteredIds=[...new Set(allIdsArray)] 
   
    
    for(let j=0;j<filteredIds.length;j++){
    let count=0
    let nrOfitems=0
    let array=[]
    let result=0
        for(let i=0;i<items.length;i++){
            if(items[i][0]===filteredIds[j]){
               array.push(items[i][1])
            }
        }
      array=array.sort((a,b)=>{
          return b-a
      })
      
       for(let k=0;k<array.length;k++){
           if(k<5){
               
               count+=array[k]
           }
       }
    
        result=count/5
        finishedArray.push([filteredIds[j],Math.floor(result)])
        
    }
   for(let i=0;i<finishedArray.length;i++){
       if(finishedArray[i+1]!== undefined && finishedArray[i]!==undefined){
           
          if(finishedArray[i][0]>finishedArray[i+1][0]){
        let t =finishedArray.shift()
        finishedArray.push(t)
       }
       } 
   }
    return finishedArray
};