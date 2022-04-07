/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
            if(edges.length===2){
               if(edges[0][0]===edges[1][0]||edges[0][0]===edges[1][1])return edges[0][0]
               if(edges[0][1]===edges[1][0]||edges[0][1]===edges[1][1])return edges[0][1]
               }
    
        for(let i=1;i<edges.length;i++){
            
            if(i===edges.length-1)return edges[0][0]
            if(edges[0][0]===edges[i][0]||edges[0][0]===edges[i][1]){
                continue;
            }
            else break
        }
    
    
        for(let i=1;i<edges.length;i++){
          
            if(i===edges.length-1)return edges[0][1]
            if(edges[0][1]===edges[i][1]||edges[0][1]===edges[i][0]){
                continue;
            }
            else break
        }
    
    
    
};