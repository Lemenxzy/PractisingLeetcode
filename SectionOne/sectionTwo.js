//[2,7,11,15], 9
const twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length;  j++ ) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 26));