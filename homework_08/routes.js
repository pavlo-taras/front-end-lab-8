var express = require('express');
var router = express.Router();

let handler = require("./controllers/handlers");

router.get('/rockstars', handler.getAll);
router.get('/rockstar/:id', handler.get);
router.post('/rockstar', handler.post);
router.put('/rockstar/:id', handler.put);
router.delete('/rockstar/:id', handler.delete);    

module.exports = router;
