function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// let myNode = new TreeNode(8);

var sortedArrayToBST = (nums) => {
  // base case
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  // create a new TreeNode(center)
  let centerIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIdx]);

  let leftSubTree = nums.slice(0, centerIdx);
  let rightSubTree = nums.slice(centerIdx + 1, nums.length);

  root.left = sortedArrayToBST(leftSubTree);
  root.right = sortedArrayToBST(rightSubTree);

  return root;
};

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([-10, -6, -3, 0, 2, 5, 9]));
