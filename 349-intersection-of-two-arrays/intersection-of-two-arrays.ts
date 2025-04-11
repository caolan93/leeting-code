function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
  
    return [...set1].filter(num => set2.has(num));
};