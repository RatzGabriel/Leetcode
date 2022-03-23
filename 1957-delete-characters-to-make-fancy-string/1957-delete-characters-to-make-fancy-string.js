/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let arrayOfString=[...s];
   for(let i=0;i<arrayOfString.length;i++){
       if(arrayOfString[i]===arrayOfString[i+1]&& arrayOfString[i]===arrayOfString[i+2]){
         arrayOfString[i]=""
         
       }
   }
 return arrayOfString.join("")
};