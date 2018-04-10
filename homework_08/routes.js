var express = require('express');
var router = express.Router();

router.post('/rockstar', function(req, res) {
    res.send('POST rockstar!')
})

router.get('/rockstars', function(req, res) {
    res.send('GET rockstars')
})

router.get('/rockstar/:id', function(req, res) {
    res.send(`GET rockstar :id = ${req.params}`)
})

router.put('/rockstar/:id', function(req, res) {
    res.send('PUT rockstar :id')
})

router.delete('/rockstar/:id', function(req, res) {
    res.send('DELETE rockstar:id')
})

module.exports = router;
