//[2,7,11,15], 9
const twoSum = function(nums, target) {
   let obj = {};
   for (let i = 0; i < nums.length; i++) {
       if (obj[nums[i]] !== undefined) {
           return [obj[nums[i]], i];
       }
       obj[target - [nums[i]]] = i;
   }
   return [];
};

console.log(twoSum([2,7,11,15], 18));
