const isPrime = (num) => {
    if (2 > num) {
        return false;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true;
}
