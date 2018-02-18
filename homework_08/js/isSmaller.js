const isBigger = (a, b) => a > b;

const isSmaller = (a, b) => {
    return a !== b && !isBigger(a, b);
}
