const max = process.argv[2];
let fizzBuzz = function*() {
    let cur = 0;

    while (cur < max) {
        cur++;
        let value = cur % 15 == 0 ? "FizzBuzz" : (cur % 3 == 0 ? "Fizz" : (cur % 5 == 0 ? "Buzz" : cur));
        yield value;
    }
}();

for (var n of fizzBuzz) {
    console.log(n);
}
