function areOccurrencesEqual(s: string): boolean {
    let map: Map<string, number> = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    const iter = map.values();
    const first = iter.next().value;

    for (const count of iter) {
        if (count !== first) return false;
    }

    return true;
}