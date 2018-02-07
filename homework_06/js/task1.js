let a = parseInt(prompt("Please, enter length of one side", '0')),
    b = parseInt(prompt("Please, enter length of two side", '0')),
    c = parseInt(prompt("Please, enter length of three side", '0'))

if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a > 0 && b > 0 && c > 0) {
    // find Perimeter of the triangle
    let p = (a + b + c) / 2
    // find square of the triangle
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