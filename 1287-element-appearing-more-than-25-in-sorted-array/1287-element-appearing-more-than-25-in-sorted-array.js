/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0) +1);
        if(map.get(arr[i])>arr.length/4)return arr[i]
    }
    
};