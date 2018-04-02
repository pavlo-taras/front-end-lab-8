const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (triggerFail) {
                reject(false);
                return;
            }
  
            resolve(true);
        }, msec);
    });
};

const asyncFn = async () => {
    const result = await waitFewSec(1000);
    return result;
};

const doAsyncMagic = async () => {
    let result = [];
    for (var i = 0; i < 4; i++) {
        result.push(await asyncFn());
    }
    console.log(result);
}

doAsyncMagic(); // [true, true, true, true]


async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
       yield i;
    }
}

const iterateRange = async () => {
    for await (const item1 of rangeGen()) {
        console.log(Promise.resolve(item1))
    }
}
  
iterateRange(); // Promise {<resolved>: 120}
