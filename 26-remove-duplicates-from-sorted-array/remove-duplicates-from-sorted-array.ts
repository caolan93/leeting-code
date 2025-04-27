function removeDuplicates(nums: number[]): number {
    if(!nums || nums.length === 0) return 0;

    let position = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[position] = nums[i]
            position++
        }
    }
    return position;
};