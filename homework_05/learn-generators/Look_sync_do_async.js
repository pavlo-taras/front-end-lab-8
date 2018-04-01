let fs = require('fs');
    
function run (generator) {
    let it = generator(go);
    
    function go (err, result) {
        if (err) {
            it.throw(err)
        } else {
            it.next(result);
        }
    }
    
    go();    
}

run(function* (done) {
    let firstFile;
    try {
        let dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    } catch(e) {
        firstFile = null;
    }

    console.log(firstFile);
});
