const decypherPhrase = (obj, str) => {
    let reverseObj = {}

    for (let k in obj) {
        reverseObj[obj[k]] = k
    }

    return cypherPhrase(reverseObj, str)
}