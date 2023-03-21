function KMP(str1, str2) {
    let lps = [];
    function constructLPS(input) {
        lps[0] = 0;
        let j = 0; // lps proper prefix
        let i = 1; // lps proper suffix

        while (i < input.length) {
            if (input[i] === input[j]) {
                lps[i] = j + 1;
                i++;
                j++;
            } else {
                if (j === 0) {
                    lps[i] = 0;
                    i++;
                } else {
                    // most important step
                    j = lps[j - 1];
                }
            }
        }
    }

    constructLPS(str2);
    let i = 0;
    let j = 0;
    let counter = 0;

    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            j++;
            i++;
            if (j === str2.length) {
                counter++;
                j = lps[j - 1];
            }
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }
    }

    console.log(counter);
}

KMP("ABCDABCDABCDABCD", "ABCDABCD");
