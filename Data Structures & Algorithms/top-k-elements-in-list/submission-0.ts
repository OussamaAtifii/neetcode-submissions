class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const num of nums) {
            const numExists = map.get(num);

            if (!numExists) {
                map.set(num, 1);
            } else {
                map.set(num, numExists + 1);
            }
        }

        const bucketSort: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, value] of map) {
            bucketSort[value] = [...bucketSort[value], key];
        }

        const result = [];

        for (let i = bucketSort.length - 1; i >= 0; i--) {
            if (result.length === k) return result;

            if (bucketSort[i]) {
                for (const num of bucketSort[i]) {
                    result.push(num);
                }
            }
        }

        return result;
    }
}
