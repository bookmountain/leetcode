class Solution {
    encode(strs: string[]) {
        let res = "";
        for (let s of strs) {
            res += strs.length + "#" + s;
        }
        return res;
    }

    decode(str: string) {
        let res: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j += 1;
            }
            let length = Number(str.slice(i, j));
            res.push(str.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }

        return res;
    }
}

console.log(new Solution().encode(["abc", "def"]));
console.log(new Solution().decode("3#abc3#def"));
