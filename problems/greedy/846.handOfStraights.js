var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize) {
        return false;
    }
    const count = {};
    for (card of hand) {
        count[card] = count[card] ? count[card] + 1 : 1;
    }

    const sortedCards = Object.keys(count)
        .map(Number)
        .sort((a, b) => a - b);

    for (const card of sortedCards) {
        if (count[card] > 0) {
            for (let i = card; i < card + groupSize; i++) {
                if (!count[i]) {
                    return false;
                }
                count[i]--;
            }
        }
    }

    return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
