const getTransformedArray = (arr, callback) => {
    let result = []

    forEach(arr, (el) => { result.push(callback(el)) })

    return result
}