const fromNum = 1
const toNum = 20

let num = parseFloat(prompt("Please, to enter a natural number from 1 to 20", "0"))

if (fromNum <= num && num <= toNum && num === parseInt(num)) {

    const cell = "[~]"
    let str = ''

    for (let i = 1; i <= num; i++) {
        str += '   '.repeat(num - i) + cell.repeat(i * 2 - 1) + '\n'
    } 

    console.log(str)
} else {
  console.log("Incorrect!")
}
