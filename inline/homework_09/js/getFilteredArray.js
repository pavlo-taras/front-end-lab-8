const getFilteredArray = (arr, callback) => {
    let result = []

    forEach(arr, (el) => {
        if (callback(el)) {
            result.push(el)
        }
    })

    return result
}