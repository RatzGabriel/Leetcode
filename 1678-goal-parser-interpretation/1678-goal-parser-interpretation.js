/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result=[]
    
    for(let i=0;i<command.length;i++){
        if(command[i]==="G"){
            result.push(command[i])
        }
        else if(command[i]==='('){
                if(command[i+1]===')'){
            result.push("o")
                }
         else if(command[i+1]==="a"){
            if(command[i+2]==="l"){
                result.push("al")
            }
        }
        }
       
    
    }
return result.join("")
};