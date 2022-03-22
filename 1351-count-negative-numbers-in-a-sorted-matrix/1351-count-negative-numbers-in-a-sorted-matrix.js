/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]<0){
                count++
            }
        }
    }
    return count
    // 1) Interpret the Prompt
//          given "m x n matrix grid"-
//           which is sorted non increasing order "both row-wise and column wise"
//          return number of negative numbers in grid
// 2)

//   I:

//   O:

//   C:

//   E:

// 3) Write Tests

//

// 4) High Level Strategys

//      1.

//      2.

// 5) PseudoCode

// 6) Implement the solution
};