/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let array=[...s]
    
  
    for(let i=0;i<15;i++){
         for(let i=0;i<array.length;i++){
        if(array[i]==="a"||array[i]==="e"||array[i]==="i"||array[i]==="o"||array[i]==="u"){
           array.splice(i,1)
           }
    }
    }
    return array.join("").toString()
};