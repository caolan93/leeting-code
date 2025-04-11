function missingNumber(nums: number[]): number {
let expectedSum = (nums.length * (nums.length + 1)) / 2;
let actualSum = nums.reduce((acc, val) => acc + val, 0);
return expectedSum - actualSum;
}