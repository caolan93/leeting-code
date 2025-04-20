function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    let mapS = new Map()
    let mapT = new Map()

    for (let x = 0; x < s.length; x++) {
        if (mapS.get(s[x]) && mapS.get(s[x]) !== t[x] || mapT.get(t[x]) && mapT.get(t[x]) !== s[x]){
            return false
        }

        mapS.set(s[x], t[x])
        mapT.set(t[x], s[x])
    }

    return true
};