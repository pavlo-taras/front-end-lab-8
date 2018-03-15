const cypherPhrase = (obj, str) => {
    return getTransformedArray(str.split(""), (el) => {        
        return obj[el] || el
    }).join("")
}