function isHappy(n: number): boolean {
    let seen: Set<number> = new Set()

    while (n !== 1 && !seen.has(n)) {
        let sum = 0;
        seen.add(n)
        let digits = n.toString().split('')

        for (const digit of digits) {
            const num = Number(digit);
            sum += num * num
        }

        n = sum;
    }

    return n === 1
};