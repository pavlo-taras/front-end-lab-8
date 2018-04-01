function *flat (arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (Array.isArray(value)) {
            yield *flat(value);
        } else {
            yield value;
        }
    }
}
  
var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
