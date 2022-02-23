/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function deleteIt(inp){
        let saveStringS=inp;
        for(let i=0;i<saveStringS.length;i++){        
        if(saveStringS[i]==="#"){
            if(saveStringS[i-1]===undefined){
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
    return deleteIt(s)===deleteIt(t)
};