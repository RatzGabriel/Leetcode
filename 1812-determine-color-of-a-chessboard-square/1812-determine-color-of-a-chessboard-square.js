/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
// 1) Interpret the Prompt
//    Given Coordinates,if square=white returen true, else return false
//

// 4) High Level Strategys

//      1.if coordinates[0]=a,c,e,g
//          if(coordinates[1]%2===0) return white
//              else return false
//        else 
//          if(coordinates[1]%2===0) return black
//            else return false
// 

// 5) PseudoCode

// 6) Implement the solution
    if(coordinates[0]==="a"||coordinates[0]==="c"||coordinates[0]==="e"||coordinates[0]==="g"){
        if(coordinates[1]%2===0){
            return true
        }
        else return false
    }
    else {
        if(coordinates[1]%2===0){
            return false
        }
        else return true
    }
};