class Solution {
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (map.has(need)) {
                const j = map.get(need);
                return j < i ? [j, i] : [i, j];
            }

            map.set(nums[i], i);
        }
    }
}