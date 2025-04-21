function romanToInt(s: string): number {

    const hashMap: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let num: number = 0;

      for (let i = 0; i < s.length; i++) {
        const current = hashMap[s[i]];
        const next = hashMap[s[i + 1]];

        if (next && current < next) {
            num -= current;
        } else {
            num += current;
        }
    }

    return num

};