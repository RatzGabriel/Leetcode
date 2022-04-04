/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const a=[];
    
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
              if(prices[j]<=prices[i]) {  
                a.push(prices[i]-prices[j]);
                break;
              }
              else if(j===prices.length-1){
                   a.push(prices[i])
              }
        }
        if(i===prices.length-1){
            a.push(prices[i])
        }
    }
    return a
    

    
    
};