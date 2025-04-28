function searchInsert(nums: number[], target: number): number {
    if (!nums || nums.length === 0) return 0;
    let leftPosition: number = 0;
    let rightPosition: number = nums.length - 1;

    while (leftPosition <= rightPosition) {
        const mid = Math.floor((leftPosition + rightPosition) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            leftPosition = mid + 1;
        } else {
            rightPosition = mid - 1;
        }
    }

    return leftPosition
}