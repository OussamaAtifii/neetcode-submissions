class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.split(" ").join("");
    const filtered = str.replace(/[^a-zA-Z0-9]/g, "");

    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].toLowerCase() !== filtered[filtered.length - 1 - i].toLowerCase()) return false;
    }

    return true;
    }
}
