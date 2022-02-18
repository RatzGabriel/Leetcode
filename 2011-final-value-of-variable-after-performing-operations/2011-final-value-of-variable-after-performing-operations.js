/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let count=0
    for(let i=0;i<operations.length;i++) {
   
        console.log(operations[i])  
        if(operations[i]==="--X" ||operations[i]==="X--" ){
            console.log('1')
            count--
        }
        else count++
  }
    return count
};