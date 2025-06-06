function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > nums.length / 2) {
            return num;
        }
    }

    return -1; 
};