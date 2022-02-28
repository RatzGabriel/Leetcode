/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let isThereAnA=false
    let isThereAnB=false
    for(let i=0;i<s.length;i++){
        if(s[i]==="a"){
            isThereAnA=true
        }
    }
     for(let i=0;i<s.length;i++){
        if(s[i]==="b"){
            isThereAnB=true
        }
    }
    if(isThereAnA===false)return true
    if(isThereAnB===false)return true
    //Interpret:
    // given a string(consist of 'a' & 'b')
    // return true if every a is before b
    // else return false
    //
    // I:string
    // O:boolean
    // C:s[i] is not 'a' or 'b'
    // E:s[i] 'A' or 'B', there are no a`s or b`s
    
    // Higher Level Strategy
    // A) iterate after first b and check if there is any a after
    //
    // B) iterate , for every a check if there is a b after
    //Pseudo Code
    //  for s length find first b
    //   for remaining length check if there is an a
    //     if yes return false
    //     if no return true
    
    for(let i=0;i<s.length;i++){
        if(s[i]==="b"){
            for(let j=i;j<s.length;j++){
                if(s[j]==="a"){                   
                    return false
                }
            }
            return true
        }
    }
};