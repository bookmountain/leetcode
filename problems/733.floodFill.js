var floodFill = function (image, sr, sc, color) {
    const initColor = image[sr][sc];
    if (initColor === color) {
        return image;
    }

    fill(image, sr, sc, color, initColor);
    return image;
};

function fill(image, sr, sc, newColor, initColor) {
    if (image[sr][sc] === initColor) {
        image[sr][sc] = newColor;
        // upperElement
        if (sr >= 1) {
            fill(image, sr - 1, sc, newColor, initColor);
        }
        // lowerElement
        if (sr + 1 < image.length) {
            fill(image, sr + 1, sc, newColor, initColor);
        }

        // leftElement
        if (sc >= 1) {
            fill(image, sr, sc - 1, newColor, initColor);
        }

        // rightElement
        if (sc + 1 < image[0].length) {
            fill(image, sr, sc + 1, newColor, initColor);
        }
    }
}

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
        1,
        1,
        2
    )
);
