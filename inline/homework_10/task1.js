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

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'