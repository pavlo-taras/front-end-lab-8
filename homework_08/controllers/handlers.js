var fs = require('fs');
var path = require('path');

var filename = "../data/storage.json";
var pathFile = path.join(__dirname, filename);

exports.getAll = function(req, res) {
    fs.readFile(pathFile, function(e, data) {
        if (e) return res.status(500).send();
        try {
            let result = JSON.parse(data);
            res.status(200).send(result);
        } catch (e) {
            res.status(500).send();
        }
    })
}

exports.get = function(req, res) {
    fs.readFile(pathFile, function(e, data) {
        if (e) return res.status(500).send();
        try {
            let result = JSON.parse(data || "[]");
            let idMusician = req.params.id;
            let dataMusician = result.filter(current => current.id == idMusician);

            if (dataMusician.length) {
                res.status(200).send(dataMusician[0]);
            } else {
                res.status(404).send();
            }
        } catch (e) {
            res.status(500).send();
        }
    })
}

exports.post = function(req, res) {
    let postData = req.body;

    if (Object.keys(postData).length == 0) {
        res.status(400).send();
    }

    fs.readFile(pathFile, 'utf8', function (err, data) {
        if (err) return res.status(500).send();
        try {
            let result = JSON.parse(data || "[]");

            let isExist = result.some(obj => isEqual(obj, postData));
            if (isExist) {
                res.status(409).send({"message": "Musician already exist."});
            } else {
                result.push(postData);

                fs.writeFile(pathFile, JSON.stringify(result, null, 4), function(err) {
                    if (err) return res.status(500).send();
                    res.status(201).send();
                });
            }
        } catch (e) {
            res.status(500).send();
        }
    });
}

exports.put = function(req, res) {
    let idMusician = req.params.id;
    let putData = req.body;

    fs.readFile(pathFile, 'utf8', function (err, data) {
        if (err) return res.status(500).send();
        try {
            let result = JSON.parse(data || "[]");

            let indexMusician = result.findIndex(current => current.id == idMusician)

            if (indexMusician > -1) {                
                result[indexMusician] = putData;

                fs.writeFile(pathFile, JSON.stringify(result, null, 4), function(err) {
                    if (err) return res.status(500).send;
                    res.status(200).send(putData);
                });

            } else {
                res.status(404).send();
            }

        } catch (e) {
            res.status(500).send();
        }
    });
}

exports.delete = function(req, res) {
    let idMusician = req.params.id;

    fs.readFile(pathFile, 'utf8', function (err, data) {
        if (err) return res.status(500).send();
        try {
            let result = JSON.parse(data || "[]");

            let indexMusician = result.findIndex(current => current.id == idMusician)

            if (indexMusician > -1) {                
                result.splice(indexMusician, 1);

                fs.writeFile(pathFile, JSON.stringify(result, null, 4), function(err) {
                    if (err) return res.status(500).send();
                    res.status(200).send({"message": "Musician has been successfully removed."});
                });

            } else {
                res.status(404).send();
            }

        } catch (e) {
            res.status(500).send();
        }
    });
}

const isEqual = (obj1, obj2) => {
    let propsObj1 = Object.getOwnPropertyNames(obj1);
    let propsObj2 = Object.getOwnPropertyNames(obj2);

    if (propsObj1.length != propsObj2.length) {
        return false;
    }

    return propsObj1.every(propName => Object.is(obj1[propName], obj2[propName]));
}
