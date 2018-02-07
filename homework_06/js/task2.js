const currencies  = {
    euro: 33.85,
    dollar: 27.46
}
    

let strAmountEURO = prompt("Enter the amount of money in EURO:", 0)
let amountEURO = parseInt(strAmountEURO)
let isCorrectAmountEURO = Number.isInteger(amountEURO) && amountEURO == strAmountEURO && amountEURO > 0

let strAmountUSD = parseInt(prompt("Enter the amount of money in USD:", 0));
let amountUSD = parseInt(strAmountUSD)
let isCorrectAmountUSD = Number.isInteger(amountUSD) && amountUSD == strAmountUSD && amountUSD > 0

if (!isCorrectAmountEURO) console.log("Incorect data euro")
if (!isCorrectAmountUSD)  console.log("Incorect data dollar")

if (isCorrectAmountEURO && isCorrectAmountUSD) {
    let rateEuroDollar = currencies.euro / currencies.dollar;

    console.log(`${amountEURO} euros are equal ${(amountEURO * currencies.euro).toFixed(2)} UAH, ` +
        `${amountUSD} euros are equal ${(amountUSD * currencies.dollar).toFixed(2)} UAH, ` +
        `one euro is qual ${(currencies.euro / currencies.dollar).toFixed(4)} dollars.`)
}