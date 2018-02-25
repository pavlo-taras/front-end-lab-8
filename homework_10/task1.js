const debounce = (callback, ms) => {

    let timeoutId = null
  
    return function (...parameters) {
        const stop = () => {
            callback.apply(this, parameters)
            timeoutId = null
        }
  
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
  
        timeoutId = setTimeout(stop, ms)
    }
}
