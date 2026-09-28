class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const remainder = target - nums[i];
            const value = map.get(remainder);

            if (value !== undefined) {
                return [i, value];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
