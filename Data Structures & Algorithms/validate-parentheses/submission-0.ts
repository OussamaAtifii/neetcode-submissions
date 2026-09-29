class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracketsMap = new Map<string, string>([
            ["[", "]"],
            ["{", "}"],
            ["(", ")"],
        ]);

        const openPending = [];

        for (const char of s) {
            const isToOpen = bracketsMap.has(char);

            if (isToOpen) {
                openPending.push(char);
                continue;
            }

            const lastOpenPending = openPending.pop();

            if (bracketsMap.get(lastOpenPending) !== char) {
                return false;
            }
        }

        return openPending.length === 0;
    }
}
