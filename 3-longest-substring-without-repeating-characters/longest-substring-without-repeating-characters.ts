function lengthOfLongestSubstring(s: string): number {
    let start: number = 0;
    let longestCount: number = 0
    let prev: Map<string, number> = new Map()

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (prev.has(char) && prev.get(char)! >= start) {
            start = prev.get(char)! + 1;
        }

        prev.set(char, end);

        longestCount = Math.max(longestCount, end - start + 1);
    }

    return longestCount;
};