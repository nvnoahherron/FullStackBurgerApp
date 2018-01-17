var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function (req, res) {
    console.log(req.body);
    burger.insertOne(req.body, function (data) {
            res.redirect('/');
        });
});

router.put('/burgers/:id', function (req, res) {
    var condition = {
        id: req.params.id
        }
    burger.updateOne(condition, function (data) {
        res.redirect('/');
    });
});

module.exports = router;