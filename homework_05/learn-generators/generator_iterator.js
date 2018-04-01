function *factorial(n){
    let iter = 1;
    let fact = 1;

    while (iter <= n) {
        fact = fact * iter++;
        yield fact;
    }
}
  
for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120 
