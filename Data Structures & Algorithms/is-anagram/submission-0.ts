class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapS = new Map<string, number>();
        const mapT = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const valueS = mapS.get(s[i]);
            const valueT = mapT.get(t[i]);

            mapS.set(s[i], valueS ? valueS + 1 : 1);
            mapT.set(t[i], valueT ? valueT + 1 : 1);
        }

        for (let [key, value] of mapS) {
            if (!mapT.has(key)) return false;
            if (mapT.get(key) !== value) return false;
        }

        return true;
    }
}
