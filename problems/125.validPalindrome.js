var isPalindrome = function (s) {
    const str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
