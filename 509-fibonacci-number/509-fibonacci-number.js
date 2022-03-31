/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
//    F(n) === sequence, i === sum of 2 preceding i
//    starting 0 1
    
   let a=[0,1];
   let count=0;
   while(count<=n){
       if(count===n)return a[count]
       a.push(a[a.length-1]+a[a.length-2]);
        count++
   }
};