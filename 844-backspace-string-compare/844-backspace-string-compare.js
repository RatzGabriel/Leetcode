/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  
    //given 2 strings s and t 
    // return true if they are equal
    //   when both are typed into emtpy text editors
    //     "#" means a backspace character
    //  (after backspacing an empty text, the text will continue empty)
    // I: string string
    // O: boolean
    
    //Strategy A)
    // Iterate s
    //  for every # delete the char before it and the hash
    //  compare s and t
    //  return true if same or false if not
    
    //Pseudo
    //   for s length
    //    if # delete char before it and itself
    //   for t length
    //    if # delete char before it and itself
    //   compare s and t
    //   return true if same or false if not
    //str.slice(0, 4) + str.slice(5, str.length))
    //Implement
    function deleteIt(inp){
        let saveStringS=inp;
        for(let i=0;i<saveStringS.length;i++){        
        if(saveStringS[i]==="#"){
            if(saveStringS[i-1]===undefined){
                console.log('undefined')
                let first=saveStringS.slice(0,i)
                let second=saveStringS.slice(i+1)
                saveStringS=first+second
                i=-1
                continue
            }
            let first=saveStringS.slice(0,i-1)
            let second=saveStringS.slice(i+1)
            saveStringS=first+second
            i=-1
            continue
        }
    }
        return saveStringS
    }
    let a = deleteIt(s)
    let b = deleteIt(t)
   
    return a===b
};