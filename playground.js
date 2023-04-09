function steps(n, row = 0, stair = "") {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    const add = stair.length <= row ? "#" : " ";

    steps(n, row, stair + add);
}

steps(5);
