/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    // 1) Interpret the Prompt
//      in 2 arrays find all strigs that appear exactly once in each array
//
//
// 2)

//   I:string[] string[]

//   O:number

// 4) High Level Strategys

//      1.iterate array1 check if string is unique in array 1
//        if yes
//        check if it is also unique in array 2
//          if yes count++
//          if no next word
//

//      2.reduce array1 and create array with objects {string,count}
//        reduce array2 and create array with objects {string,count}
//        iterate objects1[] 
//          if objects1[].count===1
//        iterate objects2[]
//          if objects2[].count===1
//            count++

// 5) PseudoCode
//          for array1.length 
//            if string[i]===unique
//              for array2.length
//                 if string[j]===unique
//                   count++
//                 else continue

// 6) Implement the solution
    
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
       console.log(uniqueArray1[key],key)
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