const floodFill = function (image, sr, sc, newColor) {
    // your code here.
    // get init color by column and row
    const initColor = image[sr][sc]; //1
    //new color = 2
    // start to fill
    const fill = (image, sr, sc, newColor, initColor) => {
        // if the color is not flooded, implement filling
        if (image[sr][sc] === initColor) {
            //filled image by 2
            image[sr][sc] = newColor;
            if (sr >= 1) {
                //top
                // upper row, the same column
                fill(image, sr - 1, sc, newColor, initColor);
            }
            if (sr + 1 < image.length) {
                //check not greater than rows of the image
                // bottom
                // beneath row, the same column
                fill(image, sr + 1, sc, newColor, initColor);
            }
            if (sc >= 1) {
                // only if it is greater than 0 has left side
                // left
                // the same row, column - 1
                fill(image, sr, sc - 1, newColor, initColor);
            }
            if (sc + 1 < image[0].length) {
                // check if less than columns of image
                // right
                // the same row, column + 1
                fill(image, sr, sc + 1, newColor, initColor);
            }
        }
    };
    fill(image, sr, sc, newColor, initColor);
    return image;
};
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
