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

    if (!s || s.length === 0) return num

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'V') {
            if (s[i - 1] === 'I') {
                num += 3
            } else {
                num += 5
            }
        } else if (s[i] === 'X') {
            if (s[i - 1] === 'I') {
                num += 8
            } else {
                num += 10
            }
        } else if (s[i] === 'L') {
            if (s[i - 1] === 'X') {
                num += 30
            } else {
                num += 50
            }
        } else if (s[i] === 'C') {
            if (s[i - 1] === 'X') {
                num += 80
            } else {
                num += 100
            }
        } else if (s[i] === 'D') {
            if (s[i - 1] === 'C') {
                num += 300
            } else {
                num += 500
            }
        } else if (s[i] === 'M') {
            if (s[i - 1] === 'C') {
                num += 800
            } else {
                num += 1000
            }
        } else {
            num += hashMap[s[i]]
        }

    }

    return num

};