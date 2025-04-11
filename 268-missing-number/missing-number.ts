function missingNumber(nums: number[]): number {
    let missing: number = 0;
    let sortedArr: number[] = nums.sort((a, b) => a - b)

    for(let i = 0; i <= sortedArr.length; i++){
        if(missing === sortedArr[i]){
            missing++
        }  else {
            return missing 
        }
    }

    return missing;
}