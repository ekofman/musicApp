var express = require('express');
var router = express.Router();

/*
 * GET recordingslist.
 */
router.get('/recordingslist', function(req, res) {
    var db = req.db;
    db.collection('recordings').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * POST to addrecording.
 */
router.post('/addrecording', function(req, res) {
    var db = req.db;
    db.collection('recordings').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;

