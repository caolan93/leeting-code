function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    let countMap: Map<string, number> = new Map()

    for(const char of s){
        countMap.set(char, (countMap.get(char) || 0) + 1)
    }

    for(const char of t){
        if(!countMap.get(char)) return false
        countMap.set(char, (countMap.get(char) - 1))

        if(countMap.get(char) === 0){
            countMap.delete(char)
        }
    }

    return countMap.size === 0
};