function twoSum(nums, target) {
    const map = new Map();

    for(let i=0; i<nums.length; i++) {
        let compaund = target - nums[i];

        if(map.has(compaund)) {
            return [map.get(compaund),i];
        }  else {
            map.set(nums[i], i);
        }
    }
    return [];
}

let nums = [1,5,7,8,9,3];
let target = 8;

let result = twoSum(nums, target);
console.log(result);