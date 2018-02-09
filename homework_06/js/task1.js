let strA = prompt("Please, enter length of one side", "0"),
    strB = prompt("Please, enter length of two side", "0"),
    strC = prompt("Please, enter length of three side", "0")

let str2num = (str) => {
    let num = parseFloat(str)

    return (!isNaN(num) && isFinite(num) && num == str && num > 0) ? num : 0
}

let a = str2num(strA),
    b = str2num(strB),
    c = str2num(strC)

if (a && b && c) {
    let maxNum = Math.max(a, b, c)

    if ((a + b + c - maxNum) > maxNum) {
        // find Perimeter of the triangle
        let p = (a + b + c) / 2

        // find square of the triangle (Heron's formula)
        let s = Math.sqrt(Math.abs(p * (p - a) * (p - b) * (p - c)))

        // all lengths of sides aren’t equal
        let type = "scalene"

        // has one right interior angle
        if (
            (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) || 
            (Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2)) || 
            (Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2))
        ) {
            type = "right triangle"
        } else if (a == b && b == c) {
            // all lengths of sides are equal
            type = "equilateral"
        } else if (a == b || b == c || c == a) {
            // only two lengths of sides are equal
            type = "isosceles"
        }

        console.log(`Type of triangle is ${type} and square is ${s.toFixed(2)}`)    
    } else {
        console.log("Incorrect data")
    }
} else {
    console.log("Incorrect data")
}
