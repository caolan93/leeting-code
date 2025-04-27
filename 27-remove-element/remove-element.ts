function removeElement(nums: number[], val: number): number {
    if (!nums || nums.length === 0) return 0;

    let positionToInsert: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[positionToInsert] = nums[i];
            positionToInsert++;
        }
    }
    return positionToInsert;
};