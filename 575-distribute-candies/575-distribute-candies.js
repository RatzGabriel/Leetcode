/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
let halfLength=candyType.length/2
const uniqueCandies = [...new Set(candyType)]
console.log(uniqueCandies)
    if(uniqueCandies.length>halfLength){
        return halfLength
    }
    else return uniqueCandies.length
};