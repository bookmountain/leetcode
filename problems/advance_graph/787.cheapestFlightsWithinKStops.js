var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    // BFS k+1 layers
    for (let i = 0; i < k + 1; i++) {
        const tempPrices = [...prices];
        for (const [from, to, price] of flights) {
            if (prices[from] === Infinity) {
                continue;
            }
            if (prices[from] + price < tempPrices[to]) {
                tempPrices[to] = prices[from] + price;
            }
        }
        prices = tempPrices;
    }
    if (prices[dst] === Infinity) {
        return -1;
    } else {
        return prices[dst];
        ㄋ;
    }
};
console.log(
    findCheapestPrice(
        4,
        [
            [0, 1, 100],
            [1, 2, 100],
            [2, 0, 100],
            [1, 3, 600],
            [2, 3, 200],
        ],
        0,
        3,
        1
    )
);
