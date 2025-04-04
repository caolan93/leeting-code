function twoSum(nums: number[], target: number): number[] {
    let indices: Map<number, number> = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let complemented = target - nums[i];
        if(indices.has(complemented)){
            return [indices.get(complemented), i]
        }
        indices.set(nums[i], i)
    }

    return []
};