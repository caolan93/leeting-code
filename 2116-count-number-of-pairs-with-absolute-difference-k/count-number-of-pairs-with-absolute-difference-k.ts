function countKDifference(nums: number[], k: number): number {
    let count: number = 0
    const map: Record<string, number> = {};

    if (!nums || nums.length === 0) return count;

    for (let num of nums) {
        if (map[num - k]) {
            count += map[num - k];
        }
        if (map[num + k]) {
            count += map[num + k];
        }
        map[num] = (map[num] || 0) + 1;
    }

    return count;
};