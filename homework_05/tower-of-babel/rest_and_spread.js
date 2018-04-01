var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
    if(val !== '') args.push(+val);
    });
});

// write a function called `avg` here that calculates the average.
let avg = (...args) => args.length > 0 ? args.reduce((sum, current) => sum + current, 0) / args.length : 0;
console.log(avg(...args));
