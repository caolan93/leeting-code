function containsDuplicate(nums: number[]): boolean {
    let map: Map<number, number> = new Map()

    for(const num of nums){
        if(map.has(num)){
            return true
        } 
        map.set(num, 1)
    }

    return false
};