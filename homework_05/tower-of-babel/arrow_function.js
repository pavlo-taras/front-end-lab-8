var inputs = process.argv.slice(2);
var result = inputs.map(elem => elem[0].toUpperCase()).reduce((str, current) => str + current, "");
console.log(result);
