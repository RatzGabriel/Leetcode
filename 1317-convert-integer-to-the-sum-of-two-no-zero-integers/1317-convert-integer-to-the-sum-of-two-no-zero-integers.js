/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

let regexZero=/([0])/g
    for(let i=0;i<10000;i++){
        for(let j=0;j<10000;j++){
            if(i.toString().match(regexZero)||j.toString().match(regexZero))continue
            if(i+j===n)return [i,j]
            if(i+j>n)break
        }
    }
};