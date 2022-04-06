/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    
    let resultArray=[]
    
    function recurssionNode(root){
        if(!root)return;
        if(!root.left&&root.right) resultArray.push(root.right.val);
        if(!root.right&&root.left) resultArray.push(root.left.val);
        recurssionNode(root.left)
        recurssionNode(root.right)
    }
    recurssionNode(root)
    return resultArray
    
    
     
};