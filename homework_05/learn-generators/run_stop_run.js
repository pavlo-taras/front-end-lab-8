function *range(from, to) {    
    while (from <= to) {
        yield from++;
    }
}
  
for (var r of range(5, 10)) {
    console.log( r );
}
// should print: 5, 6, 7, 8, 9, 10
