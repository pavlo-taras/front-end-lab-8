const collectIds = (arr) => {
    let result = []
    
    forEach(
        getFilteredArray(arr, (el) => {
            return el.rating > 3
        }),
        (el) => {
            result.push(el.id)
        }
    )
    
    return result
}
