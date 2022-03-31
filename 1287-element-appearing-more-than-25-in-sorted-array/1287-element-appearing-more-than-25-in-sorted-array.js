/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  if (arr.length===1) return arr[0]
  let quarter=arr.length/4;
  let count=0;
  let biggest=0;
  for(let i=0;i<arr.length;i++){
      count=1;
     for(let j=0;j<arr.length;j++){
         if(arr[i]===arr[j]&&i!==j){
             count++  
         }
         if (count>quarter) return arr[i]
     }
  }
    return biggest
};