const reverseNumber = (num) => {
    let isNegative = 0 > num;

    return (isNegative ? -1 : 1) * parseInt(num.toString().split("").reverse().join(""));
}