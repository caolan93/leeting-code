function areOccurrencesEqual(s: string): boolean {
    let map: Map<string, number> = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    const firstCount = [...map.values()][0];
    return [...map.values()].every(count => count === firstCount);
}