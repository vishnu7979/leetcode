var sortedArrayToBST = function(nums) {
    const helper = (nums, start, end) => {
    if(end < start) 
        return null;
    
    let mid = start + Math.floor((end - start) / 2);
    
    let node = new TreeNode(nums[mid]);
    node.left = helper(nums, start, mid - 1);
    node.right = helper(nums, mid+1, end);
    
    return node;
}

return helper(nums, 0, nums.length - 1);
}