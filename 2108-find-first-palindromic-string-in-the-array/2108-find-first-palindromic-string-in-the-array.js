/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    function checkPalindrome(str){
        if(str.length===2){
            if(str[0]===str[1])return str[0]
            else return ""
        }
        
        let a=[...str];
        if(a.length%2===0){
            let left =a.splice(0,a.length/2);
            console.log('first',left.join(""),a.join(""));
            if(left.join("")===a.reverse().join(""))return true
            else return false
        }
        else {
            let left=a.splice(0,a.length/2);
            let right=a.splice(1);
            console.log('second',left.join(""),right.join(""));
            if(left.join("")===right.reverse().join(""))return true
            else return false
        }
    }
    
    
    for(let i=0;i<words.length;i++){
      if(checkPalindrome(words[i]))return words[i];
        if(i===words.length-1)return ""
    }
};