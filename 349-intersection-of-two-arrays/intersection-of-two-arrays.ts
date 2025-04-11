function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr = []

    Array.from(set1).map((num) => {
        if(set2.has(num)){
            arr.push(num)
        }
    })

    return arr
};