//[2,7,11,15], 9
const twoSum = function(nums, target) {
    let obj = {};
    const fn = (pre, cur, index, arr) => {
        if (obj[cur] !== undefined) {
            //中断循环
            arr.splice(1);
            return [obj[cur], index]
        }
        obj[pre - cur] = index;
        return target;
    };
    return nums.reduce(fn, target);
};

twoSum([2,7,11,15], 13);