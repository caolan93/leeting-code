function missingNumber(nums: number[]): number {
let expectedSum = (nums.length * (nums.length + 1)) / 2;
let actualSum = nums.reduce((acc, val) => acc + val);
return expectedSum - actualSum;
}