/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *      this.val = (val===undefined ? 0 : val)
 *      this.left = (left===undefined ? null : left)
 *      this.right = (right===undefined ? null : right)
 * }
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var sortedArrayToBST = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
