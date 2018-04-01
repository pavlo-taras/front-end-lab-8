const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {

        let iter = 0;
        return {
            next() {            
                let isDone = ++iter > max;
                let result = {done: isDone};

                if (!isDone) {
                    result["value"] = iter % 15 == 0 ? "FizzBuzz" : (iter % 3 == 0 ? "Fizz" : (iter % 5 == 0 ? "Buzz" : iter))
                } 

                return result;
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
    // 1
    // 2
    // Fizz
    // 4
    // Buzz
    // Fizz
    // 7
    // 8
    // Fizz
    // Buzz
    // 11
    // Fizz
    // 13
    // 14
    // FizzBuzz
    // 16
    // 17
    // Fizz
    // 19
    // Buzz
    // Fizz
    // 22
    // 23
    // Fizz
    // Buzz
    // 26
    // Fizz
    // 28
    // 29
    // FizzBuzz
    // ...
}
