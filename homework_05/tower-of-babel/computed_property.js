
var obj = {};
obj[((evenOrOdd) => evenOrOdd % 2 === 0 ? "even" : "odd")(+process.argv[2])] = +process.argv[2];
obj[((sum) => sum)(+process.argv[3] + +process.argv[2])] = +process.argv[3] + +process.argv[2];
console.log(obj);
